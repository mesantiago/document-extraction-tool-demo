import { Request, Response, NextFunction } from 'express';
import * as documentHelper from '../helpers/document.helper';
import * as openai from '../connectors/openai';
import fs from 'fs';
import ExtractReportResult from '../interfaces/ExtractReportResult';

export const extract = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const document = req.file;
    if (!document) {
      res.status(422).json({
        message: 'Invalid input'
      });
      return;
    }
    const extractedText: string = await documentHelper.extract(document);
    // res.json(extractedText);
    const summary = {
      "summary": {
        "totalGoals": 3,
        "totalBMPs": 5,
        "completionRate": 0
      },
      "goals": [
        {
          "description": "Restrictions on NPDES permitting activities.",
          "expectedOutcome": "Ensure the maximum load of TBODu specified in the TMDL of 1,317 lbs/day will not be exceeded.",
          "planTimelineSchedule": [
            1,
            2
          ]
        },
        {
          "description": "Implementation of nutrient BMPs in the watershed.",
          "expectedOutcome": "Achieve the modeled NPS loads in the TMDL.",
          "planTimelineSchedule": [
            1,
            2,
            3
          ]
        },
        {
          "description": "Implement BMPs on pasturelands and lands used for grazing to limit livestock access to streams.",
          "expectedOutcome": "Mitigate any NPS contributors to pathogens in the watershed.",
          "planTimelineSchedule": [
            1,
            2,
            3,
            4
          ]
        }
      ],
      "bmps": [
        {
          "name": "Fencing",
          "unit": "ft",
          "unitCount": 10000,
          "unitCost": 2.33,
          "totalCost": 23300
        },
        {
          "name": "Tank/Trough",
          "unit": "ea",
          "unitCount": 3,
          "unitCost": 3500,
          "totalCost": 10500
        },
        {
          "name": "Ponds",
          "unit": "ea",
          "unitCount": 4,
          "unitCost": 9000,
          "totalCost": 36000
        },
        {
          "name": "Streambank and Shoreline Protection",
          "unit": "ft",
          "unitCount": 500,
          "unitCost": 161,
          "totalCost": 80500
        },
        {
          "name": "Grade Stabilization Structure",
          "unit": "ac",
          "unitCount": 8,
          "unitCost": 6609.8,
          "totalCost": 52878
        }
      ],
      "implementation": [
        {
          "activity": "Develop, execute, and implement a Subgrant Agreement.",
          "timeline": "Month 1"
        },
        {
          "activity": "Secure commitments from priority area landowners and operators.",
          "timeline": "Months 1-6"
        },
        {
          "activity": "Determine through GIS applications and intensive site surveys the priority areas within the sub-watershed.",
          "timeline": "Months 1-36"
        },
        {
          "activity": "Implement and monitor baseline water quality conditions in the watershed.",
          "timeline": "Months 1-2 & 3-36"
        },
        {
          "activity": "Collect adequate photo documentation before, during, and after installation of the approved BMPs.",
          "timeline": "Months 3-36"
        }
      ],
      "monitoring": [
        {
          "parameter": "Dissolved Oxygen",
          "threshold": "Daily Average of 5.0 mg/L"
        },
        {
          "parameter": "Dissolved Oxygen % Sat",
          "threshold": "≥ 70% - ≤ 125%"
        },
        {
          "parameter": "E. coli",
          "threshold": "30-day geometric mean of 126 per 100 ml"
        }
      ],
      "outreach": [
        {
          "activity": "Conduct water model presentations.",
          "audience": "Public, Students"
        },
        {
          "activity": "Organize teacher workshops to train educators about NPS pollution.",
          "audience": "Teachers"
        },
        {
          "activity": "Implement Adopt A Stream workshops and training for citizens.",
          "audience": "Citizens"
        }
      ],
      "geographicAreas": [
        {
          "name": "Basket Creek-Hickahala Creek Watershed",
          "type": "Watershed"
        },
        {
          "name": "Tate County",
          "type": "County"
        }
      ]
    };
    // const summary: ExtractReportResult = await openai.getSummary(extractedText);
    res.json({
      fileName: document.originalname,
      ...summary
    });
    fs.unlinkSync(document.path); // Delete the file from the server.
  } catch (error) {
    next(error);
  }
};
