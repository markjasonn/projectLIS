export interface BillItems {
    bill: string;
    shortTitle: string;
    dateFiled: string;
    author: string;
}

export class DataSource{
    billSearchResult : BillItems[] = billSearchResult;
}

const billSearchResult: BillItems[] = [
    {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "11/19/2018", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2029', shortTitle: 'TEACHERS OF CHILDREN WITH HANDICAPS ENHANCEMENT ACT', dateFiled: " 9/24/2018", author: 'BINAY, MARIA LOURDES NANCY S.'},
    {bill: 'SBN-1989', shortTitle: 'SOUTH COTABATO MANPOWER TRAINING CENTER ACT', dateFiled: " 9/10/2018", author: 'BINAY, MARIA LOURDES NANCY S.'},
    {bill: 'SBN-1967', shortTitle: 'CONVERTING THE ZIGA MEMORIAL DISTRICT HOSPITAL IN THE CITY OF TABACO, PROVINCE OF ALBAY', dateFiled: "8/30/2018", author: 'EJERCITO, JOSEPH VICTOR G.'},
    {bill: 'SBN-1943', shortTitle: 'REAL ESTATE MORTGAGE FORECLOSURE PROCEEDINGS ACT OF 2018', dateFiled: "8/15/2018", author: 'BINAY, MARIA LOURDES NANCY S.'},
    {bill: 'SBN-1874', shortTitle: 'ENTREPRENEURIAL AGRICULTURAL EDUCATION ACT', dateFiled: "7/16/2018", author: 'ANGARA, JUAN EDGARDO "SONNY" M.'},
    {bill: 'SBN-1857', shortTitle: 'ROAD SAFETY EDUCATION ACT OF 2017', dateFiled: "6/28/2018", author: 'EJERCITO, JOSEPH VICTOR G.'},
    {bill: 'SBN-1838', shortTitle: 'ZAMBOANGA DEL NORTE SPORTS ACADEMY AND TRAINING CENTER', dateFiled: "5/30/2018", author: 'ZUBIRI, JUAN MIGUEL F.'},
    {bill: 'SBN-1834', shortTitle: 'TRANSFERRING THE PNPA, NPTI FROM THE PHILIPPINE PUBLIC SAFETY COLLEGE TO THE PNP', dateFiled: " 5/29/2018", author: 'ESCUDERO, FRANCIS "CHIZ" G.'},
    {bill: 'SBN-1822', shortTitle: 'MANDATORY MOTORCYCLE SAFETY TRAINING PROGRAM', dateFiled: "5/28/2018", author: 'EJERCITO, JOSEPH VICTOR G.'},
    {bill: 'SBN-1798', shortTitle: 'AUTOMATIC SUSPENSION OF THE EXCISE TAX ON FUEL UNDER REPUBLIC ACT NO. 10963 (TRAIN )', dateFiled: "5/10/2018", author: 'AQUINO IV, PAOLO BENIGNO "BAM"'},
    {bill: 'SBN-1781', shortTitle: 'ELDER ASSISTANCE ACT OF 2018', dateFiled: "4/17/2018", author: 'POE, GRACE L.'},
    {bill: 'SBN-1716', shortTitle: 'PHILIPPINE AMATEUR SPORTS TRAINING CENTER ACT', dateFiled: "2/28/2018", author: 'ANGARA, JUAN EDGARDO "SONNY" M.'},
    {bill: 'SBN-1798', shortTitle: 'AUTOMATIC SUSPENSION OF THE EXCISE TAX ON FUEL UNDER REPUBLIC ACT NO. 10963 (TRAIN )', dateFiled: " 5/10/2018", author: 'AQUINO IV, PAOLO BENIGNO "BAM"'},
    {bill: 'SBN-1781', shortTitle: 'ELDER ASSISTANCE ACT OF 2018', dateFiled: "4/17/2018", author: 'POE, GRACE L.'},
    {bill: 'SBN-1716', shortTitle: 'PHILIPPINE AMATEUR SPORTS TRAINING CENTER ACT', dateFiled: "2/28/2018", author: 'ANGARA, JUAN EDGARDO "SONNY" M.'},
    {bill: 'SBN-1712', shortTitle: 'SARANGANI SPORTS TRAINING CENTER', dateFiled: " 2/27/2018", author: 'PACQUIAO, EMMANUEL "MANNY" D.'},
    {bill: 'SBN-1704', shortTitle: 'PHILIPPINE GERIATRIC CENTER ACT', dateFiled: "2/21/2018", author: 'POE, GRACE L.'},
    {bill: 'SBN-1649', shortTitle: 'BATAAN GENERAL HOSPITAL AND MEDICAL CENTER', dateFiled: "1/16/2018", author: 'EJERCITO, JOSEPH VICTOR G.'},
    {bill: 'SBN-1592', shortTitle: 'TAX REFORM ACCELERATION AND INCLUSION (TRAIN)', dateFiled: "9/20/2017", author: 'RECTO, RALPH G.'},
    {bill: 'SBN-1546', shortTitle: 'PRIMARY CARE PROVIDER RECRUITMENT ACT OF 2017', dateFiled: "8/7/2017", author: 'POE, GRACE L.'},
    {bill: 'SBN-1517', shortTitle: 'PHILIPPINE AMATEUR SPORTS TRAINING CENTER ACT', dateFiled: "7/26/2017", author: 'PACQUIAO, EMMANUEL "MANNY" D.'},
    {bill: 'SBN-1443', shortTitle: 'FARM SCHOOL AND AGRICULTURE TRAINING SCHOLARSHIP ACT OF 2017', dateFiled: "5/9/2017", author: 'VILLAR, CYNTHIA A.'},
    {bill: 'SBN-1431', shortTitle: 'TULONG-TRABAHO ACT', dateFiled: "5/3/2017", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-1417', shortTitle: 'CITIZEN SERVICE ACT OF 2017', dateFiled: "5/2/2017", author: 'GORDON, RICHARD J.'},
    {bill: 'SBN-1394', shortTitle: 'TRIBAL HEALTH WORKERS ACT OF 2017', dateFiled: "3/15/2017", author: 'BINAY, MARIA LOURDES NANCY S.'},
    {bill: 'SBN-1392', shortTitle: 'APPRENTICESHIP TRAINING SYSTEM ACT OF 2017', dateFiled: "3/14/2017", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-1377', shortTitle: 'MATURE AND OLDER WORKERS ACT', dateFiled: "3/8/2017", author: 'EJERCITO, JOSEPH VICTOR G.'},
    {bill: 'SBN-1369', shortTitle: 'TESDA MIMAROPA REGIONAL TRAINING CENTER', dateFiled: "3/7/2017", author: ' LACSON, PANFILO M.'},
    {bill: 'SBN-1322', shortTitle: 'CITIZEN SERVICE ACT', dateFiled: "2/9/2017", author: 'PIMENTEL, AQUILINO KOKO III L.'},
    {bill: 'SBN-1318', shortTitle: 'TULONG-TRABAHO ACT OF 2017', dateFiled: "2/8/2017", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-1196', shortTitle: 'MATERNAL AND CHILDBIRTH SERVICES', dateFiled: "10/11/2016", author: 'GATCHALIAN, SHERWIN T.'},
    {bill: 'SBN-1156', shortTitle: 'ENSURE HEALTH ACT', dateFiled: "9/19/2016", author: 'ANGARA, JUAN EDGARDO "SONNY" M.'},
    {bill: 'SBN-1131', shortTitle: 'ROTC ACT OF 2016', dateFiled: "9/8/2016", author: 'EJERCITO, JOSEPH VICTOR G.'},
    {bill: 'SBN-1042', shortTitle: 'KASAMBAHAY EMPOWERMENT ACT', dateFiled: "8/18/2016", author: 'BINAY, MARIA LOURDES NANCY S.'},
    {bill: 'SBN-675', shortTitle: 'NATIONAL AMATEUR SPORTS TRAINING CENTER ACT', dateFiled: "7/20/2016", author: 'AQUINO IV, PAOLO BENIGNO "BAM"'},
    {bill: 'SBN-574', shortTitle: 'TRANSFERRING THE PNPA AND PNTI FROM THE PHIL. PUBLIC SAFETY COLLEGE TO THE PHIL. NATIONAL POLICE', dateFiled: "7/19/2016", author: 'TRILLANES, ANTONIO "SONNY" F.'},
    {bill: 'SBN-425', shortTitle: 'MEDICAL RESIDENCY TRAINING PROGRAMS', dateFiled: "7/19/2016", author: 'LEGARDA, LOREN B.'},
    {bill: 'SBN-316', shortTitle: 'PHILIPPINE AMATEUR SPORTS TRAINING CENTER ACT', dateFiled: "7/4/2016", author: 'ANGARA, JUAN EDGARDO "SONNY" M.'},
    {bill: 'SBN-214', shortTitle: 'BIBONG BHW ACT OF 2016', dateFiled: "6/30/2016", author: 'HONTIVEROS, RISA'},
    {bill: 'SBN-212', shortTitle: 'TRAINING INSIDE PRISONS ACT OF 2016', dateFiled: "6/30/2016", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-208', shortTitle: 'ENTERPRISE-BASED EDUCATION AND TRAINING ACT OF 2016', dateFiled: "6/30/2016", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-200', shortTitle: "MANDATORY MILITARY AND CIVIC RESERVE OFFICERS' TRAINING CORPS", dateFiled: "6/30/2016", author: 'GATCHALIAN, SHERWIN T.'},
    {bill: 'SBN-189', shortTitle: 'CITIZEN ARMED FORCE OR ARMED FORCES OF THE PHILIPPINES RESERVIST ACT', dateFiled: "6/30/2016", author: 'PACQUIAO, EMMANUEL "MANNY" D.'},
    {bill: 'SBN-153', shortTitle: 'TRAIN PROTECTION ACT', dateFiled: "6/30/2016", author: 'EJERCITO, JOSEPH VICTOR G.'}
];
