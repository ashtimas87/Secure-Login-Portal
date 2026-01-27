export interface MonthlyAccomplishments {
    Jan: number | string;
    Feb: number | string;
    Mar: number | string;
    Apr: number | string;
    May: number | string;
    Jun: number | string;
    Jul: number | string;
    Aug: number | string;
    Sep: number | string;
    Oct: number | string;
    Nov: number | string;
    Dec: number | string;
    Total?: number | string;
}

export interface Activity {
    id?: number;
    name: string;
    indicator: string;
    accomplishments: MonthlyAccomplishments;
}

export interface PerformanceIndicator {
    id: number;
    title: string;
    activities: Activity[];
    total?: MonthlyAccomplishments;
}


export const PI_DATA: PerformanceIndicator[] = [
    {
        id: 1,
        title: 'Number of Community Awareness/Information Activities Initiated',
        activities: [
            { name: 'Formulation of Stratcom Snapshots', indicator: 'No. of stratcom snapshot formulated', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Social Media Analysis', indicator: 'No. of Social Media Analysis conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Implementation of IO', indicator: 'No. of activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Conduct of P.I.C.E.', indicator: 'No. of PICE conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Production of Leaflets and handouts as IEC Materials', indicator: 'No. of Printed copies', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Production of Outdoor IEC Materials', indicator: 'No. of Streamers andTarpaulins, or LED Wall Displayed', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Face-to-face Awareness Activities', indicator: 'No. of Face-to-face Awareness conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Dissemination of related news articles involving the PNP in region for the information of Command Group/Commanders', indicator: 'No. of emails and SMS sent', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Management of PNP Social Media Pages and Accounts', indicator: 'No. of account followers', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Social Media Post Boosting', indicator: 'No. of target audience reached', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Social Media Engagement', indicator: 'No. of Engagement', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Radio/TV/Live Streaming', indicator: 'No. of guesting/show', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Press Briefing', indicator: 'No. of Press Briefing to be conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Reproduction and Distribution of GAD-Related IEC Materials', indicator: 'No. of copies GAD-Related IEC Materials to be distributed', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Conduct awareness activity relative to clan/family feuds settlement and conflict resolution and mediation', indicator: 'No. of Lectures on Islamic Religious and Cultural Sensitivity to be conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Lectures on Islamic Religious and Cultural Sensitivity', indicator: 'No. of Awareness activity relative to clan/family feuds settlement and conflict resolution and mediationto be conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Dialogue on Peacebuilding and Counter Radicalization', indicator: 'No. of Dialogue on Peacebuilding and Counter Radicalization to be conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 2,
        title: 'Number of sectoral groups/BPATs mobilized/organized',
        activities: [
            { name: 'collaborative efforts with NGOs, CSOs, GAs and Non-GAs and other stakeholders activities', indicator: 'No. of collaborative efforts with NGOs, CSOs, GAs and Non-GAs and other stakeholders activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 3,
        title: 'Number of participating respondents',
        activities: [
            { name: 'Secretariat Meetings', indicator: 'No. Secretariat Meetings conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Convening of IO Working Group', indicator: 'No. of activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Activation of SyncCom during major events', indicator: 'No. of activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Summing-up on Revitalized Pulis Sa Barangay (R-PSB)', indicator: 'No. of summing-up conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Summing-up on Counter White Area Operations (CWAO)', indicator: 'No. of summing-up conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'StratCom support to NTF-ELCAC', indicator: 'No. of activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'StratCom and ComRel Support to NTF-DPAGgs', indicator: 'No. of activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'StratCom Support to TF-Single Bread', indicator: 'No. of activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'TG Opns for Mid-Term Elections', indicator: 'No. of activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Enhanced Feedback Mechanism thru SMS', indicator: 'No. of activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'PNP Good Deeds', indicator: 'No. of PNP Good Deeds', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Conduct dialogues, meetings, and workshops with different audiences', indicator: 'No. of activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Deployment of SNR team', indicator: 'Deployment of SNR team', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'PNP Help and Food Bank Initiatives', indicator: 'No. of activities initiated', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Maintenance and Operationalization of PNP Help Desks (OPNP, etc)', indicator: 'No. of PNP Help Desk Maintained and Complaints or Referrals', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'PNP Advocacy Support Groups and Force Multipliers (KKDAT, KALIGKASAN,KASIMBAYANAN, etc)', indicator: 'No. of support activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Inter-Agency Cooperation on Anti-Illegal Drugs', indicator: 'No. of inter-agency activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Recovery and Wellness Program', indicator: 'No. of activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Drug Awareness Activities', indicator: 'No. of activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Support to Barangay Drug Clearing Program', indicator: 'No. of activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Coordination, implementation and monitoring of the Interfaith Squad System', indicator: 'No. of activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'National Day of Remembrance for SAF 44', indicator: 'No. of activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'EDSA People\'s Power Anniversary', indicator: 'No. of activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Philippine Independence Day', indicator: 'No. of activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'National Heroes Day', indicator: 'No. of activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'National Flag Day', indicator: 'No. of activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'National Crime Prevention Week (NCPW)', indicator: 'No. of adopted KASIMBAYANAN', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Celebration of National Women\'s Month', indicator: 'No. of activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: '18-Day Campaign to End VAWC', indicator: 'No. of activities conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'National Children\'s Month', indicator: 'No. of complaints/Referral', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 4,
        title: 'Percentage of accounted loose firearms against the estimated baseline data',
        activities: [
            { name: 'JAPIC', indicator: 'JAPIC conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Operations on loose firearms', indicator: 'Operations on loose firearms conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Bakal/Sita', indicator: 'Bakal/Sita conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 5,
        title: 'Number of functional LACAP',
        activities: [
            { name: 'P/CPOC meetings', indicator: '# P/CPOC meetings participated', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Oversight Committee Meetings', indicator: '# of Oversight Committee Meetings conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Maintenance of AIDMC', indicator: '# of AIDMC maintained', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'operations against highway robbery', indicator: '# of opns against highway robbery conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'anti-bank robbery operations', indicator: '# of anti-bank robbery opns conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'operations against OCGs/PAGs', indicator: '# of operations against OCGs/PAGs conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'operations against kidnapping', indicator: '# of opns against kidnapping conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'operations against carnapping', indicator: '# of operations against carnapping conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'operations against illegal gambling', indicator: '# of operations against illegal gambling conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'operations against illegal fishing', indicator: '# of operations against illegal fishing conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'operations against illegal logging', indicator: '# of operations against illegal logging conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'operations on anti-illegal drugs', indicator: '# of opns on anti-illegal drugs conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 6,
        title: 'Number of police stations utilizing PIPS',
        activities: [
            { name: 'EMPO Assessment and Evaluations', indicator: 'No. of EMPO Assessment and Evaluations conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Field/sector inspection', indicator: 'No. of Field/sector inspection conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 7,
        title: 'Number of Internal Security Operations conducted',
        activities: [
            { name: 'Oversight Committee Meetings', indicator: 'Oversight Committee Meetings on ISO conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'JPSCC meetings', indicator: 'JPSCC meetings conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Major LEO', indicator: 'Major LEO conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Minor LEO', indicator: 'Minor LEO conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'PPSP', indicator: 'PPSP conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Clearing operations in support to AFP territorial units', indicator: 'Clearing operations in support to AFP territorial units conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 8,
        title: 'Number of target hardening measures conducted',
        activities: [
            { name: 'Security/Inspection', indicator: '# of Security/Inspection conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'CI check/validation', indicator: '# of CI check/validation conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'CI monitoring', indicator: '# of CI monitoring conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Clearances issued to civilians', indicator: '# of Clearances issued to civilians', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Clearances issued to PNP/AFP per', indicator: '# of Clearances issued to PNP/AFP per', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Threat assessment', indicator: '# of Threat assessment conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Awareness/maintenance of FNKN', indicator: '# of Awareness/maintenance of FNKN', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Communications with FNKN', indicator: '# of Communications with FNKN', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Monitoring of cases/incidents involving foreign nationals', indicator: '# of Monitoring of cases/incidents involving foreign nationals', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'VIP security during national events', indicator: '# of VIP security during national events conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Security to vital installations', indicator: '# of Security to vital installations conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'VIP security protection', indicator: '# of VIP security protection', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'collaborative efforts with NGOs, CSOs, GAs and Non-GAs and other stakeholders re Muslim Affairs', indicator: '# of collaborative efforts with NGOs, CSOs, GAs and Non-GAs and other stakeholders re Muslim Affairs conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Medical and Dental outreach and other Similar Activities in Muslim Community', indicator: '# Of Medical and Dental outreach and other Similar Activities in Muslim Community conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Awareness activity relative to clan/family feuds settlement and conflict resolution and mediation', indicator: '# of Awareness activity relative to clan/family feuds settlement and conflict resolution and mediation conduct', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Conduct prayer rallies, peace covenant signing, peace caravan, and other peacebuilding-related activity like sports activity', indicator: 'Conduct prayer rallies, peace covenant signing, peace caravan, and other peacebuilding-related activity like sports activity', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Strengthening of Salaam Force Multipliers/Salaam Police Advocacy Groups (SPAG)', indicator: 'Strengthening of Salaam Force Multipliers/Salaam Police Advocacy Groups (SPAG)', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Peace and PCVE training for Muslim Scholars', indicator: 'Peace and PCVE training for Muslim Scholars', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Understanding PCVE for BJMP Personnel', indicator: 'Understanding PCVE for BJMP Personnel', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'PNP Custodial Facility Visitation and Counseling of Muslim and Non-Muslim Person\'s Deprived of Liberty with TRC\'s', indicator: 'PNP Custodial Facility Visitation and Counseling of Muslim and Non-Muslim Person\'s Deprived of Liberty with TRC\'s', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Oplan Tambay-Visitation of Masjid and Madrasah', indicator: 'Oplan Tambay-Visitation of Masjid and Madrasah', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Masjid and Madrasah Visitation', indicator: 'Masjid and Madrasah Visitation', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Masjids and Madrasah Visitation', indicator: '# of Masjids and Madrasah Visited', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: '# of K9 security opns during rallies/demonstrations conducted', indicator: '# of K9 security opns during rallies/demonstrations conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: '# of K9 patrols conducted', indicator: '# of K9 patrols conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: '# of seaborne patrols conducted', indicator: '# of seaborne patrols conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: '# of EOD counter measures conducted', indicator: '# of EOD counter measures conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: '# of BI conducted', indicator: '# of BI conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: '# of record check conducted', indicator: '# of record check conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: '# of CI opns conducted', indicator: '# of CI opns conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: '# of SIMEX conducted', indicator: '# of SIMEX conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: '# of scity opns during local events conducted', indicator: '# of scity opns during local events conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: '# of beat/foot patrols conducted', indicator: '# of beat/foot patrols conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: '# of bike patrols conducted', indicator: '# of bike patrols conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: '# of horse-riding patrols conducted', indicator: '# of horse-riding patrols conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: '# of mobile patrols conducted', indicator: '# of mobile patrols conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: '# of checkpoints conducted', indicator: '# of checkpoints conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 9,
        title: 'Percentage reduction of crimes involving foreign and domestic tourists',
        activities: [
            { name: 'Maintenance of TPU', indicator: '# of TPU maintained', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Maintenance of TAC', indicator: '# of TAC maintained', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Maintenance of TAD', indicator: '# of TAD maintained', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 10,
        title: 'Number of Police stations using COMPSTAT for crime prevention',
        activities: [
            { name: 'Crime Information Reporting and Analysis System', indicator: 'No. of Crime Information Reporting and Analysis System data recorded', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'e-Wanted Persons Information System', indicator: 'No. of Wanted Persons recorded', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'e-Rogues\' Gallery System', indicator: 'No. of eRogues recorded', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'e-Rogues\' Maintenance (3rd Qtr or as needed)', indicator: 'No. of e-Rogues\' Maintained (3rd Qtr or as needed)', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'e-Subpoena System', indicator: 'No. of Subpoena recorded', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Proper encoding in CIDMS', indicator: 'No. of CIDMS encoded', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 11,
        title: 'Number of threat group neutralized',
        activities: [
            { name: 'COPLANs formulated', indicator: 'COPLANs formulated', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'COPLANs implemented', indicator: 'COPLANs implemented', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'HVT Reports submitted', indicator: 'HVT Reports submitted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'information purchased', indicator: 'information purchased', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'OCG/ICG pers neutralized', indicator: 'OCG/ICG pers neutralized', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'HVTs newly identified', indicator: 'HVTs newly identified', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'HVTs neutralized', indicator: 'HVTs neutralized', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'PAG personalities neutralized', indicator: 'PAG personalities neutralized', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'IRs (criminality) for validation referred', indicator: 'IRs (criminality) for validation referred', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Oversight Committee Meetings conducted', indicator: 'Oversight Committee Meetings conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'PICs conducted', indicator: 'PICs conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'IRs processed', indicator: 'IRs processed', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'IRs validated', indicator: 'IRs validated', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'HVTs arrested/neutralized', indicator: 'HVTs arrested/neutralized', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'IFCs', indicator: 'IFCs', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Periodic Reports on Organized Threat Groups produced', indicator: 'Periodic Reports on Organized Threat Groups produced', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'assessment reports submitted', indicator: 'assessment reports submitted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'intel products disseminated/utilized', indicator: 'intel products disseminated/utilized', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'debriefings conducted', indicator: 'debriefings conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'interviews conducted', indicator: 'interviews conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'elicitations conducted', indicator: 'elicitations conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 12,
        title: 'Number of utilized BINs',
        activities: [
            { name: '# of inventory made', indicator: '# of inventory made', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: '# of assessment/ratings made', indicator: '# of assessment/ratings made', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: '# of directives disseminated', indicator: '# of directives disseminated', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: '# of BINs documented/registered and maintained', indicator: '# of BINs documented/registered and maintained', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: '# of IRs prepared and submitted', indicator: '# of IRs prepared and submitted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 13,
        title: 'Number of criminal cases filed',
        activities: [
            { name: '# of coordination with counterparts conducted', indicator: '# of coordination with counterparts conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: '# of court hearing or Duty on filed cases attended', indicator: '# of court hearing or Duty on filed cases attended', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: '# of coordination made on COLA cases conducted', indicator: '# of coordination made on COLA cases conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'No. OF IEC materials distributed', indicator: 'No. OF IEC materials distributed', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 14,
        title: 'Number of cases resulting to conviction/dismissal',
        activities: [
            { name: 'Monitoring Cases Against Threat Group', indicator: 'Monitoring Cases Against Threat Group', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Attend or Initiate Case Conference', indicator: 'Attend or Initiate Case Conference', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Monitoring of Filed Cases', indicator: 'Monitoring of Filed Cases', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Liaising with other Pillars of Criminal Justice System', indicator: 'Liaising with other Pillars of Criminal Justice System', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 15,
        title: 'Percentage of Trained investigative personnel/ Percentage of certified investigative personnel',
        activities: [
            { name: 'Nr. of Inventory Conducted for investigators', indicator: 'CIC', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Nr. of Inventory Conducted for investigators', indicator: 'IOBC', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 16,
        title: 'Percentage of investigative positions filled up with trained investigators',
        activities: [
            { name: 'Screening and evaluation of candidates for certified investigators', indicator: '# of screening and evaluation of candidates for certified investigators conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 17,
        title: 'Improvement in response time',
        activities: [
            { name: 'Sports supervision and training component', indicator: 'No. of Sports supervision and training component conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Sports competition component', indicator: 'No. of Sports competition component conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Crime prevention sports component', indicator: 'No. of Crime prevention sports component conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Physical Conditioning and Combat Sport', indicator: 'No. of Physical Conditioning and Combat Sport conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Reporting of incidents /operational accomplishments of the PNP via Police Operations Management Information System (POMIS)', indicator: 'No. of incidents /operational accomplishments of the PNP via Police Operations Management Information System (POMIS) reported', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 18,
        title: 'Percentage of dedicated investigators assigned to handle specific cases',
        activities: [
            { name: 'Conduct case build up and investigation for filing of cases', indicator: 'Conduct case build up and investigation for filing of cases', accomplishments: { Jan: '100%', Feb: '100%', Mar: '100%', Apr: '100%', May: '100%', Jun: '100%', Jul: '100%', Aug: '100%', Sep: '100%', Oct: '100%', Nov: '100%', Dec: '100%' } },
        ],
    },
    {
        id: 19,
        title: 'Number of recipients of a. awards b. punished',
        activities: [
            { name: 'Monday Flag Raising/Awarding Ceremony', indicator: '# of Monday Flag Raising/Awarding Ceremony conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Issuing commendations', indicator: '# of commendations issued', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Pre-Charge Investigation (PCI)', indicator: '# of PCE/I conducted: Conduct of Pre-Charge Investigation (PCI)', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 20,
        title: 'Percentage of investigative personnel equipped with standard investigative systems and procedures',
        activities: [
            { name: 'Attendance in specialized training and related seminar on investigation for enhancement of investigative personnel', indicator: 'No. of specialized training and related seminar on investigation for enhancement of investigative personnel attended', accomplishments: { Jan: '100%', Feb: '100%', Mar: '100%', Apr: '100%', May: '100%', Jun: '100%', Jul: '100%', Aug: '100%', Sep: '100%', Oct: '100%', Nov: '100%', Dec: '100%' } },
        ],
    },
    {
        id: 21,
        title: 'Percentage of Police Stations using e-based system',
        activities: [
            { name: 'Crime Information Reporting and Analysis System', indicator: 'No. of Crime Information Reporting and Analysis System recorded', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'e-Wanted Persons Information System', indicator: 'No. of Wanted Persons recorded', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'e-Rogues\' Gallery System', indicator: 'No. of e-Rogues\' Gallery System recorded', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'e-Rogues\' Maintenance (3rd Qtr or as needed)', indicator: 'No. of e-Rogues\' Maintained (3rd Qtr or as needed)', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'e-Subpoena System', indicator: 'No. of e-Subpoena System recorded', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Proper encoding in CIDMS', indicator: 'No. of CIDMS recorded', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 22,
        title: 'Number of cases filed in court/total # of cases investigated',
        activities: [
            { name: 'Index Crime', indicator: 'No. Of Index Crime Investigated', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Index Crime', indicator: 'No. Of Index Crime Filed', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Non-Index crime', indicator: 'No. Of Non-Index crime investigated', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Cases filing on Non-Index', indicator: 'No. Of cases filed on Non-Index', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'investigation on RIR', indicator: 'No. of investigation conducted on RIR', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Cases filing on RIR', indicator: 'No. of cases filed on RIR', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 23,
        title: 'Number of investigative infrastructure/equipment identified/accounted',
        activities: [
            { name: 'Inventory, inspection & Accounting', indicator: '# of Inventory, inspection & Accounting conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 24,
        title: 'Percentage of fill-up of investigative equipment and infrastructure',
        activities: [
            { name: 'Field investigative crime scene kit', indicator: 'No. of Field investigative crime scene kit accounted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Police line', indicator: 'No. of Police line accounted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Police Blotter', indicator: 'No. of Police Blotter accounted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Digital Camera', indicator: 'No. of Digital Camera accounted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Video Camera', indicator: 'No. of Video Camera accounted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 25,
        title: 'Percentage of IT-compliant stations',
        activities: [
            { name: 'computer preventive maintenance and trouble shootings', indicator: '# of computer preventive maintenance and trouble shootings conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Maintenance of printers', indicator: '# of printers maintained', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Internet payment', indicator: '# of computer internet paid', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Telephone payment bills', indicator: '# of telephone bills paid', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'cell phone payment bills', indicator: '# of cell phone bills paid', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 26,
        title: 'Number of linkages established',
        activities: [
            { name: 'JSCC meetings', indicator: 'No. of JSCC meetings conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Liaising', indicator: 'No. of liaising conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'coordination', indicator: 'No. of coordination conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 27,
        title: 'Number of community/ stakeholders support generated',
        activities: [
            { name: 'Memorandum of Agreement (MOA)/Memorandum of Understanding (MOU) signing', indicator: 'No. of Memorandum of Agreement (MOA)/Memorandum of Understanding (MOU) signing initiated', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Support to "Makakalikasan" activities (Tree planting clean-up, etc)', indicator: 'No. of Support to "Makakalikasan" activities (Tree planting clean-up, etc) conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Support to bloodletting activity', indicator: 'No of Support to bloodletting activity conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Coordination with Other Government Agencies (GA) /Government Organizations (GO)', indicator: 'No. of Other Government Agencies (GA) /Government Organizations (GO) coordinated', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 28,
        title: 'Number of investigative activities funded',
        activities: [
            { name: 'monitoring of Investigation of Heinous and Sensational Crimes', indicator: 'No. of monitored Investigation of Heinous and Sensational Crimes', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Filing of Heinous and Sensational Crimes', indicator: 'No. of Heinous and Sensational Crimes Case Filed', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Monitoring and Investigation of Violation of Specials laws', indicator: 'No. of Investigation of Violation of Specials laws monitored', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Filing of Violation of Specials laws', indicator: 'No. Case Filed of Violation of Specials laws', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Monitoring and Investigation Referred Cases', indicator: 'No. of monitored Investigation Referred Cases', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Conducting cold case review for major cases', indicator: 'No. of conducted cold case review for major cases', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Reviewing of dismissed cases on illegal drugs, heinous and sensational cases', indicator: 'No. of dismissed cases on illegal drugs, heinous and sensational cases reviewed', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Reviewing of Death Incidents', indicator: 'No. of Death Incidents reviewed', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Case Review of WCPC Cases', indicator: 'No. of Case Review of WCPC conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Conduct of Rescue Operations & Extend Special Protection to Victims', indicator: 'No. of Rescue Operations & Extend Special Protection to Victims conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Administer Mediation & Perform Initial Counseling between on Domestic Violence Cases (No. of Counseling conducted )', indicator: 'No of Administer Mediation & Perform Initial Counseling between on Domestic Violence Cases conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Maintain Closer Partnership and Liasing w/ RIACAT, IACVAWC, IACACP, UN Agencies and Other Stakeholders', indicator: 'No of liaising /coordination conducted on Maintain Closer Partnership and Liasing w/ RIACAT, IACVAWC, IACACP, UN Agencies and Other Stakeholders', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Investigation/case referral/monitoring of WCPC Cases', indicator: 'No. of investigation/case referral/monitoring of WCPC Cases conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Investigation/case referral/monitoring of WCPC Cases referred', indicator: 'No. of investigation/case referral/monitoring of WCPC Cases referred', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Conduct follow-up investigation of WCPD Cases', indicator: 'No. of follow-up investigation of WCPD Cases conducted', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Filing of cases against identified and/or neutralized suspects of WCPD cases', indicator: 'No. of cases against identified and/or neutralized suspects of WCPD cases filed', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Initiate community advocacy campaign to combat TIP/CICL/CAAC/VAWC', indicator: 'No. of community advocacy campaign to combat TIP/CICL/CAAC/VAWC Initiated', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Administer distribution of PNP Manual on Investigation of Trafficking in Person (Nr. Of PNP manuals distributed) (1st Qtr only)', indicator: 'No. of distribution of PNP Manual on Investigation of Trafficking in Person Administered (PNP manuals distributed) (1st Qtr only)', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    },
    {
        id: 29,
        title: 'Number of special investigation cases requested for fund support',
        activities: [
            { name: 'Creation and activation of SITG Cases', indicator: '# of SITG Cases Created and Activated', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
            { name: 'Creation of CIPLAN', indicator: '# of CIPLAN created', accomplishments: { Jan: 1, Feb: 1, Mar: 1, Apr: 1, May: 1, Jun: 1, Jul: 1, Aug: 1, Sep: 1, Oct: 1, Nov: 1, Dec: 1 } },
        ],
    }
];