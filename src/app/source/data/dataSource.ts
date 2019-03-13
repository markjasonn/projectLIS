export interface BillItems {
    bill: string;
    shortTitle: string;
    dateFiled: string;
    author: string;
    billInfo : BillInfo;
}

interface BillInfo{
    legislativeStatus: string;
    statusDate: string;
    sessionSequenceNo: string;
    sessionType: string;
    scope: string;
    author: string;
    coAuthors: string[];
    longTitle : string;
    committeeReportNo : CommitteeReportNo;
    sponsor : Sponsor;
    subject: Subject;
    documentCertification : DocumentCertification;
    floorActivity: FloorActivity[];
    vote : Vote;
    billTransmittal: BillTransmittal;
    rAResJRes : RAResJRes;
    copyOfRA : CopyOfRA;
    copyOfDocument : CopyOfDocument;
}

interface CommitteeReportNo{
    primaryCommittee: string;
    secondaryCommittee: string;
    committeeReportNo: string;
}

interface Sponsor{
    sponsor: string;
    coSponsor: string;
}

interface Subject{
    subject: string;
}

interface DocumentCertification{
    documentCertification : string;
    dateCertified : string;
}

export interface FloorActivity{
    statusDate : string;
    parliamentaryStatus : string;
    senators: string;
    remarks : string;
    filename: string;
}

interface Vote{
    dateOfVote : string;
    typeOfVote : string;
    yes : string;
    no : string;
    abstain : string;
}

interface BillTransmittal{
    dateRequestToFormAConfCtte: string;
    conferenceCommitteeRequestedBy : string;
}

interface RAResJRes{
    presidentAction : string;
    dateReceivedByThePresident : string;
    dateSignedIntoLaw : string;
    resNo: string;
    resTitle: string;
}

interface CopyOfRA{
    documentDescription: string;
    filename: string;
}

interface CopyOfDocument{
    documentDescription: string;
    filename: string;
}

export class DataSource{
    billSearchResult : BillItems[] = billSearchResult;
}

const billSearchResult: BillItems[] = [

    {bill: 'SBN-1592', shortTitle: 'TAX REFORM ACCELERATION AND INCLUSION (TRAIN)', dateFiled: "9/20/2017", author: 'RECTO, RALPH G.', 
        billInfo: {
            legislativeStatus: "CONSOLIDATED WITH APPROVED BILL", 
            statusDate: "12/19/2017",
            sessionSequenceNo: "23",
            sessionType: "SECOND REGULAR SESSION",
            scope: "NATIONAL",
            author: "RECTO, RALPH G.",
            coAuthors: ['GORDON, RICHARD J.','LEGARDA, LOREN B.','ZUBIRI, JUAN MIGUEL F.','ANGARA, JUAN EDGARDO "SONNY" M.','VILLAR, CYNTHIA A.','EJERCITO, JOSEPH VICTOR G.','BINAY, MARIA LOURDES NANCY S.','PIMENTEL, AQUILINO KOKO III L.','AQUINO IV, PAOLO BENIGNO "BAM"','ESCUDERO, FRANCIS "CHIZ" G.','SOTTO III, VICENTE C.','VILLANUEVA, JOEL','GATCHALIAN, SHERWIN T.'],
            longTitle : 'AN ACT AMENDING SECTIONS 5, 6, 24, 25, 31, 34, 35, 51, 79, 84, 86, 89, 90, 97, 99, 100, 101, 106, 107, 108, 109, 112, 114, 116, 148, 149, 150, 151, 155, 171, 196, 232, 237, 249, 264, AND 288; CREATING NEW SECTIONS 148-A, 150-A, 237-A, 264-A, 264-B, AND 265-A; ALL UNDER REPUBLIC ACT NO. 8424, OTHERWISE KNOWN AS THE NATIONAL INTERNAL REVENUE CODE OF 1997, AS AMENDED, AND FOR OTHER PURPOSES',
            committeeReportNo : {
                primaryCommittee: "WAYS AND MEANS",
                secondaryCommittee: "",
                committeeReportNo: "164"
            },
            sponsor: {
                sponsor: 'ANGARA, JUAN EDGARDO "SONNY" M.',
                coSponsor: ""
            },
            subject: {
                subject: "TAX REFORM FOR ACCELERATION AND INCLUSION ACT (TRAIN) \n NATIONAL INTERNAL REVENUE CODE (NIRC)"
            },
            documentCertification: {
                documentCertification : 'IMMEDIATE',
                dateCertified : '11/20/2017'
            },
            vote: {
                dateOfVote : '11/28/2017',
                typeOfVote : 'THIRD READING',
                yes : 'ANGARA, JUAN EDGARDO "SONNY" M. \n BINAY, MARIA LOURDES NANCY S. \n DRILON, FRANKLIN M. \n EJERCITO, JOSEPH VICTOR G. \n ESCUDERO, FRANCIS "CHIZ" G. \n GATCHALIAN, SHERWIN T. \n GORDON, RICHARD J. \n LEGARDA, LOREN B. \n PACQUIAO, EMMANUEL "MANNY" D. \n PIMENTEL, AQUILINO KOKO III L. \n POE, GRACE L. \n RECTO, RALPH G. \n SOTTO III, VICENTE C. \n VILLANUEVA, JOEL \n VILLAR, CYNTHIA A. \n ZUBIRI, JUAN MIGUEL F.',
                no : 'HONTIVEROS, RISA',
                abstain : '',
            },
            billTransmittal: {
                dateRequestToFormAConfCtte: '11/28/2017',
                conferenceCommitteeRequestedBy : 'SENATE'
            },
            rAResJRes: {
                presidentAction : 'CONSOLIDATED WITH APPROVED BILL',
                dateReceivedByThePresident : '12/18/2017',
                dateSignedIntoLaw : '12/19/2017',
                resNo: 'REPUBLIC ACT NO. 10963.',
                resTitle: 'AN ACT AMENDING SECTIONS 5, 6, 24, 25, 27, 31, 32, 33, 34, 51, 52, 56, 57, 58, 74, 79, 84, 86, 90, 91, 97, 99, 100, 101, 106, 107, 108, 109, 110, 112, 114, 116, 127, 128, 129, 145, 148, 149, 151, 155, 171, 174, 175, 177, 178, 179, 180, 181, 182, 183, 186, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 232, 236, 237, 249, 254, 264, 269, AND 288; CREATING NEW SECTIONS 51-A, 148-A, 150-A, 150-B, 237-A, 264-A, 264-B AND 265-A; AND REPEALING SECTIONS 35, 62 AND 89, ALL UNDER REPUBLIC ACT NO. 8424, OTHERWISE KNOWN AS THE NATIONAL INTERNAL REVENUE CODE OF 1997, AS AMENDED, AND FOR OTHER PURPOSES Copy of R.A./Res./J.Res.'
            },
            copyOfRA: {
                documentDescription: 'REPUBLIC ACT NO. 10963.',
                filename: 'ra 10963.pdf'
            },
            copyOfDocument: {
                documentDescription: 'SBN-1592 ([PER CTTE. RPT. NO. 164)',
                filename: 'sbn-1592.pdf'
            },
            floorActivity: [{
                statusDate : '9/20/2017',
                parliamentaryStatus : 'SPONSORSHIP SPEECH',
                senators: 'ANGARA, JUAN EDGARDO "SONNY" M.',
                remarks : '',
                filename: 'sbn-1592.pdf'
            },{
                statusDate : '10/2/2017',
                parliamentaryStatus : 'INTERPELLATION',
                senators: 'AQUINO IV, PAOLO BENIGNO "BAM" \n RECTO, RALPH G. \n GATCHALIAN, SHERWIN T.',
                remarks : '',
                filename: 'sbn-1592.pdf'
            },{
                statusDate : '9/27/2017',
                parliamentaryStatus : 'INTERPELLATION',
                senators: 'SOTTO III, VICENTE C.',
                remarks : '',
                filename: 'sbn-1592.pdf'
            },{
                statusDate : '10/4/2017',
                parliamentaryStatus : 'INTERPELLATION',
                senators: 'DRILON, FRANKLIN M. \n LACSON, PANFILO M. \n HONTIVEROS, RISA \n PANGILINAN, FRANCIS N. \n RECTO, RALPH G. \n GATCHALIAN, SHERWIN T. \n PACQUIAO, EMMANUEL "MANNY" D. \n PIMENTEL, AQUILINO KOKO III L.',
                remarks : '',
                filename: 'sbn-1592.pdf'
            },{
                statusDate : '9/26/2017',
                parliamentaryStatus : 'INTERPELLATION',
                senators: 'SOTTO III, VICENTE C.',
                remarks : '',
                filename: 'sbn-1592.pdf'
            },{
                statusDate : '10/4/2017',
                parliamentaryStatus : 'PERIOD OF INTERPELLATION CLOSED',
                senators: '',
                remarks : '',
                filename: 'sbn-1592.pdf'
            },{
                statusDate : '11/28/2017',
                parliamentaryStatus : 'PERIOD OF INDIVIDUAL AMENDMENTS',
                senators: '',
                remarks : '',
                filename: 'sbn-1592.pdf'
            },{
                statusDate : '9/25/2017',
                parliamentaryStatus : 'INTERPELLATION',
                senators: 'POE, GRACE L. \n SOTTO III, VICENTE C.',
                remarks : '',
                filename: 'sbn-1592.pdf'
            },{
                statusDate : '11/27/2017',
                parliamentaryStatus : 'PERIOD OF INDIVIDUAL AMENDMENTS CLOSED',
                senators: '',
                remarks : '',
                filename: 'sbn-1592.pdf'
            },{
                statusDate : '12/28/2017',
                parliamentaryStatus : 'PERIOD OF INDIVIDUAL AMENDMENTS CLOSED',
                senators: '',
                remarks : '',
                filename: 'sbn-1592.pdf'
            }]
        }
    },



    {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "11/19/2018", author: 'VILLANUEVA, JOEL', billInfo: null},
    {bill: 'SBN-2029', shortTitle: 'TEACHERS OF CHILDREN WITH HANDICAPS ENHANCEMENT ACT', dateFiled: " 9/24/2018", author: 'BINAY, MARIA LOURDES NANCY S.', billInfo: null},
    {bill: 'SBN-1989', shortTitle: 'SOUTH COTABATO MANPOWER TRAINING CENTER ACT', dateFiled: " 9/10/2018", author: 'BINAY, MARIA LOURDES NANCY S.', billInfo: null},
    {bill: 'SBN-1967', shortTitle: 'CONVERTING THE ZIGA MEMORIAL DISTRICT HOSPITAL IN THE CITY OF TABACO, PROVINCE OF ALBAY', dateFiled: "8/30/2018", author: 'EJERCITO, JOSEPH VICTOR G.', billInfo: null},
    {bill: 'SBN-1943', shortTitle: 'REAL ESTATE MORTGAGE FORECLOSURE PROCEEDINGS ACT OF 2018', dateFiled: "8/15/2018", author: 'BINAY, MARIA LOURDES NANCY S.', billInfo: null},
    {bill: 'SBN-1874', shortTitle: 'ENTREPRENEURIAL AGRICULTURAL EDUCATION ACT', dateFiled: "7/16/2018", author: 'ANGARA, JUAN EDGARDO "SONNY" M.', billInfo: null},
    {bill: 'SBN-1857', shortTitle: 'ROAD SAFETY EDUCATION ACT OF 2017', dateFiled: "6/28/2018", author: 'EJERCITO, JOSEPH VICTOR G.', billInfo: null},
    {bill: 'SBN-1838', shortTitle: 'ZAMBOANGA DEL NORTE SPORTS ACADEMY AND TRAINING CENTER', dateFiled: "5/30/2018", author: 'ZUBIRI, JUAN MIGUEL F.', billInfo: null},
    {bill: 'SBN-1834', shortTitle: 'TRANSFERRING THE PNPA, NPTI FROM THE PHILIPPINE PUBLIC SAFETY COLLEGE TO THE PNP', dateFiled: " 5/29/2018", author: 'ESCUDERO, FRANCIS "CHIZ" G.', billInfo: null},
    {bill: 'SBN-1822', shortTitle: 'MANDATORY MOTORCYCLE SAFETY TRAINING PROGRAM', dateFiled: "5/28/2018", author: 'EJERCITO, JOSEPH VICTOR G.', billInfo: null},
    {bill: 'SBN-1798', shortTitle: 'AUTOMATIC SUSPENSION OF THE EXCISE TAX ON FUEL UNDER REPUBLIC ACT NO. 10963 (TRAIN )', dateFiled: "5/10/2018", author: 'AQUINO IV, PAOLO BENIGNO "BAM"', billInfo: null},
    {bill: 'SBN-1781', shortTitle: 'ELDER ASSISTANCE ACT OF 2018', dateFiled: "4/17/2018", author: 'POE, GRACE L.', billInfo: null},
    {bill: 'SBN-1716', shortTitle: 'PHILIPPINE AMATEUR SPORTS TRAINING CENTER ACT', dateFiled: "2/28/2018", author: 'ANGARA, JUAN EDGARDO "SONNY" M.', billInfo: null},
    {bill: 'SBN-1798', shortTitle: 'AUTOMATIC SUSPENSION OF THE EXCISE TAX ON FUEL UNDER REPUBLIC ACT NO. 10963 (TRAIN )', dateFiled: " 5/10/2018", author: 'AQUINO IV, PAOLO BENIGNO "BAM"', billInfo: null},
    {bill: 'SBN-1781', shortTitle: 'ELDER ASSISTANCE ACT OF 2018', dateFiled: "4/17/2018", author: 'POE, GRACE L.', billInfo: null},
    {bill: 'SBN-1716', shortTitle: 'PHILIPPINE AMATEUR SPORTS TRAINING CENTER ACT', dateFiled: "2/28/2018", author: 'ANGARA, JUAN EDGARDO "SONNY" M.', billInfo: null},
    {bill: 'SBN-1712', shortTitle: 'SARANGANI SPORTS TRAINING CENTER', dateFiled: " 2/27/2018", author: 'PACQUIAO, EMMANUEL "MANNY" D.', billInfo: null},
    {bill: 'SBN-1704', shortTitle: 'PHILIPPINE GERIATRIC CENTER ACT', dateFiled: "2/21/2018", author: 'POE, GRACE L.', billInfo: null},
    {bill: 'SBN-1649', shortTitle: 'BATAAN GENERAL HOSPITAL AND MEDICAL CENTER', dateFiled: "1/16/2018", author: 'EJERCITO, JOSEPH VICTOR G.', billInfo: null},
    {bill: 'SBN-1546', shortTitle: 'PRIMARY CARE PROVIDER RECRUITMENT ACT OF 2017', dateFiled: "8/7/2017", author: 'POE, GRACE L.', billInfo: null},
    {bill: 'SBN-1517', shortTitle: 'PHILIPPINE AMATEUR SPORTS TRAINING CENTER ACT', dateFiled: "7/26/2017", author: 'PACQUIAO, EMMANUEL "MANNY" D.', billInfo: null},
    {bill: 'SBN-1443', shortTitle: 'FARM SCHOOL AND AGRICULTURE TRAINING SCHOLARSHIP ACT OF 2017', dateFiled: "5/9/2017", author: 'VILLAR, CYNTHIA A.', billInfo: null},
    {bill: 'SBN-1431', shortTitle: 'TULONG-TRABAHO ACT', dateFiled: "5/3/2017", author: 'VILLANUEVA, JOEL', billInfo: null},
    {bill: 'SBN-1417', shortTitle: 'CITIZEN SERVICE ACT OF 2017', dateFiled: "5/2/2017", author: 'GORDON, RICHARD J.', billInfo: null},
    {bill: 'SBN-1394', shortTitle: 'TRIBAL HEALTH WORKERS ACT OF 2017', dateFiled: "3/15/2017", author: 'BINAY, MARIA LOURDES NANCY S.', billInfo: null},
    {bill: 'SBN-1392', shortTitle: 'APPRENTICESHIP TRAINING SYSTEM ACT OF 2017', dateFiled: "3/14/2017", author: 'VILLANUEVA, JOEL', billInfo: null},
    {bill: 'SBN-1377', shortTitle: 'MATURE AND OLDER WORKERS ACT', dateFiled: "3/8/2017", author: 'EJERCITO, JOSEPH VICTOR G.', billInfo: null},
    {bill: 'SBN-1369', shortTitle: 'TESDA MIMAROPA REGIONAL TRAINING CENTER', dateFiled: "3/7/2017", author: ' LACSON, PANFILO M.', billInfo: null},
    {bill: 'SBN-1322', shortTitle: 'CITIZEN SERVICE ACT', dateFiled: "2/9/2017", author: 'PIMENTEL, AQUILINO KOKO III L.', billInfo: null},
    {bill: 'SBN-1318', shortTitle: 'TULONG-TRABAHO ACT OF 2017', dateFiled: "2/8/2017", author: 'VILLANUEVA, JOEL', billInfo: null},
    {bill: 'SBN-1196', shortTitle: 'MATERNAL AND CHILDBIRTH SERVICES', dateFiled: "10/11/2016", author: 'GATCHALIAN, SHERWIN T.', billInfo: null},
    {bill: 'SBN-1156', shortTitle: 'ENSURE HEALTH ACT', dateFiled: "9/19/2016", author: 'ANGARA, JUAN EDGARDO "SONNY" M.', billInfo: null},
    {bill: 'SBN-1131', shortTitle: 'ROTC ACT OF 2016', dateFiled: "9/8/2016", author: 'EJERCITO, JOSEPH VICTOR G.', billInfo: null},
    {bill: 'SBN-1042', shortTitle: 'KASAMBAHAY EMPOWERMENT ACT', dateFiled: "8/18/2016", author: 'BINAY, MARIA LOURDES NANCY S.', billInfo: null},
    {bill: 'SBN-675', shortTitle: 'NATIONAL AMATEUR SPORTS TRAINING CENTER ACT', dateFiled: "7/20/2016", author: 'AQUINO IV, PAOLO BENIGNO "BAM"', billInfo: null},
    {bill: 'SBN-574', shortTitle: 'TRANSFERRING THE PNPA AND PNTI FROM THE PHIL. PUBLIC SAFETY COLLEGE TO THE PHIL. NATIONAL POLICE', dateFiled: "7/19/2016", author: 'TRILLANES, ANTONIO "SONNY" F.', billInfo: null},
    {bill: 'SBN-425', shortTitle: 'MEDICAL RESIDENCY TRAINING PROGRAMS', dateFiled: "7/19/2016", author: 'LEGARDA, LOREN B.', billInfo: null},
    {bill: 'SBN-316', shortTitle: 'PHILIPPINE AMATEUR SPORTS TRAINING CENTER ACT', dateFiled: "7/4/2016", author: 'ANGARA, JUAN EDGARDO "SONNY" M.', billInfo: null},
    {bill: 'SBN-214', shortTitle: 'BIBONG BHW ACT OF 2016', dateFiled: "6/30/2016", author: 'HONTIVEROS, RISA', billInfo: null},
    {bill: 'SBN-212', shortTitle: 'TRAINING INSIDE PRISONS ACT OF 2016', dateFiled: "6/30/2016", author: 'VILLANUEVA, JOEL', billInfo: null},
    {bill: 'SBN-208', shortTitle: 'ENTERPRISE-BASED EDUCATION AND TRAINING ACT OF 2016', dateFiled: "6/30/2016", author: 'VILLANUEVA, JOEL', billInfo: null},
    {bill: 'SBN-200', shortTitle: "MANDATORY MILITARY AND CIVIC RESERVE OFFICERS' TRAINING CORPS", dateFiled: "6/30/2016", author: 'GATCHALIAN, SHERWIN T.', billInfo: null},
    {bill: 'SBN-189', shortTitle: 'CITIZEN ARMED FORCE OR ARMED FORCES OF THE PHILIPPINES RESERVIST ACT', dateFiled: "6/30/2016", author: 'PACQUIAO, EMMANUEL "MANNY" D.', billInfo: null},
    {bill: 'SBN-153', shortTitle: 'TRAIN PROTECTION ACT', dateFiled: "6/30/2016", author: 'EJERCITO, JOSEPH VICTOR G.', billInfo: null}
];
