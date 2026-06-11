import { Source } from "./types";

/**
 * Central registry of every source cited on this site.
 * Pages cite by id via <Cite id="..." />; numbers are assigned by
 * position in this list and rendered on /sources.
 *
 * NOTE: keep ids stable once published — they're used in anchors.
 */
export const sources: Source[] = [
  // ── Pikeville / local documents ─────────────────────────────────
  {
    id: "pikeville-press-release",
    title:
      "City of Pikeville Begins Formal Review of Potential Data Center Development at Kentucky Enterprise Industrial Park (press release)",
    publisher: "City of Pikeville, KY",
    url: "https://pikevilleky.gov/wp-content/uploads/2026/06/Pikeville-Press-Release-6.5.26.pdf",
    year: "2026",
    kind: "local",
  },
  {
    id: "pikeville-review-details",
    title: "What the City Is Examining and Why (data center review details)",
    publisher: "City of Pikeville, KY",
    url: "https://pikevilleky.gov/wp-content/uploads/2026/06/Data-Center-Review-Details-6.5.26.pdf",
    year: "2026",
    kind: "local",
  },
  {
    id: "pikeville-mou",
    title:
      "Executed Memorandum of Understanding between the City of Pikeville and MD Squared Power LLC",
    publisher: "City of Pikeville, KY",
    url: "https://pikevilleky.gov/wp-content/uploads/2026/06/Pikeville-MD-Squared-Power-executed-MOU.pdf",
    year: "2026",
    kind: "local",
  },
  {
    id: "pikeville-dc-page",
    title: "Data Center Information (city information hub)",
    publisher: "City of Pikeville, KY",
    url: "https://pikevilleky.gov/community-links/data-center-information/",
    year: "2026",
    kind: "local",
  },

  // ── Types, sizes & landscape ────────────────────────────────────
  {
    id: "dgtlinfra-types",
    title: "Types of Data Centers: Hyperscale, Colocation, Enterprise, Edge",
    publisher: "Dgtl Infra",
    url: "https://dgtlinfra.com/types-of-data-centers/",
    kind: "industry",
  },
  {
    id: "synergy-hyperscale-count",
    title:
      "Hyperscale Data Center Count Hits 1,136; US Accounts for 54% of Total Capacity",
    publisher: "Synergy Research Group",
    url: "https://www.srgresearch.com/articles/hyperscale-data-center-count-hits-1136-average-size-increases-us-accounts-for-54-of-total-capacity",
    year: "2025",
    kind: "industry",
  },
  {
    id: "statista-dc-count",
    title: "Number of data centers worldwide by country (April 2026)",
    publisher: "Statista",
    url: "https://www.statista.com/statistics/1228433/data-centers-worldwide-by-country/",
    year: "2026",
    kind: "industry",
  },
  {
    id: "cargoson-dc-count",
    title: "Number of data centers by country (Cloudscene data)",
    publisher: "Cargoson (citing Cloudscene)",
    url: "https://www.cargoson.com/en/blog/number-of-data-centers-by-country",
    year: "2025",
    kind: "industry",
  },
  {
    id: "cbre-nova-2025",
    title:
      "Northern Virginia Extends Lead as Largest U.S. Data Center Market in 2025 (4,039.6 MW operating)",
    publisher: "CBRE",
    url: "https://www.cbre.com/press-releases/northern-virginia-extends-lead-as-largest-u-s-data-center-market-in-2025",
    year: "2025",
    kind: "industry",
  },
  {
    id: "loudoun-dc-facts",
    title: "Data centers in Loudoun County (county fact sheet)",
    publisher: "Loudoun County, VA government",
    url: "https://www.loudoun.gov/ArchiveCenter/ViewFile/Item/13979",
    kind: "government",
  },
  {
    id: "lbnl-2024",
    title: "2024 United States Data Center Energy Usage Report (to Congress)",
    publisher: "Lawrence Berkeley National Laboratory / U.S. DOE",
    url: "https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf",
    year: "2024",
    kind: "government",
  },
  {
    id: "iea-energy-ai",
    title: "Energy and AI (global data centre electricity projections)",
    publisher: "International Energy Agency",
    url: "https://www.iea.org/reports/energy-and-ai/executive-summary",
    year: "2025",
    kind: "government",
  },
  {
    id: "uptime-tiers",
    title: "Tier Classification System (Tier I–IV)",
    publisher: "Uptime Institute",
    url: "https://uptimeinstitute.com/tiers",
    kind: "industry",
  },
  {
    id: "jlarc-2024",
    title: "Data Centers in Virginia (Report 598 — the most comprehensive independent state study of data center impacts)",
    publisher:
      "Joint Legislative Audit & Review Commission (JLARC), Virginia General Assembly",
    url: "https://jlarc.virginia.gov/landing-2024-data-centers-in-virginia.asp",
    year: "2024",
    kind: "government",
  },
  {
    id: "goodjobsfirst",
    title:
      "Money Lost to the Cloud: How Data Centers Benefit from State and Local Government Subsidies",
    publisher: "Good Jobs First",
    url: "https://goodjobsfirst.org/money-lost-cloud-how-data-centers-benefit-state-and-local-government-subsidies/",
    kind: "industry",
    note: "Subsidy-watchdog nonprofit; critical perspective.",
  },
  {
    id: "brookings-employment",
    title: "New evidence on data center employment effects",
    publisher: "Brookings Institution",
    url: "https://www.brookings.edu/articles/new-evidence-on-data-center-employment-effects/",
    year: "2025",
    kind: "industry",
  },
  {
    id: "latitude-jobs",
    title: "Data center jobs aren't at servers — they're in energy",
    publisher: "Latitude Media",
    url: "https://www.latitudemedia.com/news/data-center-jobs-arent-at-servers-theyre-in-energy/",
    kind: "news",
  },
  {
    id: "blockware-belfry",
    title:
      "Blockware Solutions builds 20MW bitcoin mining data center in Belfry, Kentucky (Pike County)",
    publisher: "CoinDesk",
    url: "https://www.coindesk.com/tech/2022/03/29/blockware-solutions-builds-20mw-bitcoin-mining-data-center-in-kentucky",
    year: "2022",
    kind: "news",
  },
  {
    id: "blockware-jobs",
    title:
      "Blockware Solutions unveils flagship Kentucky mining location (5–10 full-time jobs at ~$23/hr)",
    publisher: "PR Newswire (company announcement)",
    url: "https://www.prnewswire.com/news-releases/blockware-solutions-unveils-flagship-kentucky-mining-location-301512583.html",
    year: "2022",
    kind: "industry",
  },
  {
    id: "powerhouse-louisville",
    title:
      "PowerHouse plans 400MW data center campus in Louisville, Kentucky",
    publisher: "Data Center Dynamics",
    url: "https://www.datacenterdynamics.com/en/news/powerhouse-plans-400mw-data-center-campus-in-louisville-kentucky/",
    year: "2025",
    kind: "news",
  },
  {
    id: "terawulf-muskie",
    title:
      "TeraWulf acquires 1+ GW Eastern Kentucky HPC campus at EastPark Industrial Park (Ashland area)",
    publisher: "TeraWulf (investor press release)",
    url: "https://investors.terawulf.com/news-events/press-releases/detail/141/terawulf-expands-infrastructure-platform-with-acquisition-of-1-gw-eastern-kentucky-hpc-campus",
    year: "2026",
    kind: "industry",
  },
  {
    id: "maysville-weku",
    title:
      "Northern Kentucky residents raise concerns over a massive, secretive data center proposal (Maysville)",
    publisher: "WEKU",
    url: "https://www.weku.org/amsn/2025-12-18/northern-kentucky-residents-raise-concerns-over-a-massive-secretive-data-center-proposal",
    year: "2025",
    kind: "news",
  },
  {
    id: "kcep-who-pays",
    title:
      "Questions Grow About Who Will Pay the Cost for Big Data Centers in Kentucky",
    publisher: "Kentucky Center for Economic Policy",
    url: "https://kypolicy.org/who-will-pay-for-kentucky-data-centers/",
    kind: "industry",
    note: "Progressive policy group; critical perspective.",
  },
  {
    id: "eia-crypto",
    title:
      "Tracking electricity consumption from U.S. cryptocurrency mining operations",
    publisher: "U.S. Energy Information Administration",
    url: "https://www.eia.gov/todayinenergy/detail.php?id=61364",
    year: "2024",
    kind: "government",
  },
  {
    id: "stites-hb775",
    title:
      "Kentucky vastly expands data center tax incentives (HB 8 2024 / HB 775 2025)",
    publisher: "Stites & Harbison (law firm client alert)",
    url: "https://www.stites.com/resources/client-alerts/kentucky-vastly-expands-data-center-tax-incentives/",
    year: "2025",
    kind: "industry",
  },
  {
    id: "meta-elpaso",
    title:
      "Meta touts $10B El Paso data center: 300+ permanent jobs, 4,000+ construction at peak",
    publisher: "CBS4 El Paso",
    url: "https://cbs4local.com/newsletter-daily/meta-touts-10b-el-paso-data-center-water-and-grid-pledges-as-council-weighs-incentives",
    kind: "news",
  },

  // ── Noise ───────────────────────────────────────────────────────
  {
    id: "lsars-noise",
    title: "Data Center Noise: sources, levels, attenuation, and mitigation",
    publisher: "LSARS (acoustic consulting)",
    url: "https://www.lsars.com/data-center-noise",
    kind: "industry",
  },
  {
    id: "eesi-noise",
    title: "Communities Are Raising Noise Pollution Concerns About Data Centers",
    publisher: "Environmental and Energy Study Institute",
    url: "https://www.eesi.org/articles/view/communities-are-raising-noise-pollution-concernsabout-data-centers",
    kind: "industry",
  },
  {
    id: "cdc-noise",
    title: "About noise and hearing (everyday decibel benchmarks)",
    publisher: "CDC / NIOSH",
    url: "https://www.cdc.gov/niosh/noise/about/noise.html",
    kind: "government",
  },
  {
    id: "engineering-toolbox-inverse",
    title: "Inverse square law: sound drops ~6 dB per doubling of distance",
    publisher: "The Engineering ToolBox",
    url: "https://www.engineeringtoolbox.com/inverse-square-law-d_890.html",
    kind: "industry",
  },
  {
    id: "who-night-noise",
    title: "Night Noise Guidelines for Europe (40 dB Lnight target)",
    publisher: "World Health Organization",
    url: "https://www.who.int/europe/publications/i/item/9789289041737",
    year: "2009",
    kind: "government",
  },
  {
    id: "who-2018-noise",
    title:
      "Environmental Noise Guidelines for the European Region (53 dB Lden / 45 dB Lnight road-noise recommendations)",
    publisher: "World Health Organization",
    url: "https://cdn.who.int/media/docs/default-source/who-compendium-on-health-and-environment/who_compendium_noise_01042022.pdf",
    year: "2018",
    kind: "government",
  },
  {
    id: "epa-levels-doc",
    title:
      "EPA 'Levels Document': outdoor day-night level of 55 dB protects public health and welfare",
    publisher: "U.S. EPA (1974 guidance)",
    url: "https://www.nonoise.org/library/levels74/levels74.htm",
    year: "1974",
    kind: "government",
  },
  {
    id: "pwt-amazon-retrofit",
    title:
      "Amazon tones down its data center noise after residents sound the alarm (Great Oak, Manassas VA)",
    publisher: "Prince William Times",
    url: "https://www.princewilliamtimes.com/news/amazon-tones-down-its-data-center-noise-after-residents-sound-the-alarm/article_b81154ea-5178-59cb-ac3b-82228a2a52cf.html",
    year: "2022",
    kind: "news",
  },
  {
    id: "texas-tribune-granbury",
    title:
      "Granbury-area residents vote on forming a town to fight Bitcoin mine noise (case history, measurements)",
    publisher: "The Texas Tribune",
    url: "https://www.texastribune.org/2025/10/09/texas-hood-county-crypto-noise-incorporate-city/",
    year: "2025",
    kind: "news",
  },
  {
    id: "earthjustice-granbury",
    title:
      "Granbury residents sue local Bitcoin mine over health-threatening noise pollution",
    publisher: "Earthjustice",
    url: "https://earthjustice.org/press/2024/granbury-residents-sue-local-bitcoin-mine-over-health-threatening-noise-pollution",
    year: "2024",
    kind: "industry",
    note: "Environmental law nonprofit representing the plaintiffs.",
  },
  {
    id: "time-granbury",
    title: "Bitcoin mining noise and health complaints in Granbury, Texas (investigation)",
    publisher: "TIME",
    url: "https://time.com/6982015/bitcoin-mining-texas-health/",
    year: "2024",
    kind: "news",
  },
  {
    id: "decrypt-granbury-acquittal",
    title: "Texas jury acquits Bitcoin mine site manager on all 12 noise charges",
    publisher: "Decrypt",
    url: "https://decrypt.co/239380/texas-jury-sides-with-bitcoin-miner-marathon-in-nightmare-noise-dispute",
    year: "2024",
    kind: "news",
  },
  {
    id: "chandler-ordinance",
    title: "Chandler's data center noise ordinance (Ordinance 5033) now in effect",
    publisher: "City of Chandler, AZ",
    url: "https://www.chandleraz.gov/news-center/chandlers-data-center-ordinance-now-effect",
    year: "2023",
    kind: "government",
  },
  {
    id: "cdd-cyrusone-chandler",
    title:
      "CyrusOne forced to take action following noise complaints in Chandler, Arizona",
    publisher: "Data Center Dynamics",
    url: "https://www.datacenterdynamics.com/en/news/cyrusone-forced-to-take-action-following-noise-complaints-in-chandler-arizona/",
    kind: "news",
  },
  {
    id: "cnn-murphy-nc",
    title:
      "North Carolina crypto mine noise: 55–85 dB readings in neighbors' yards (Cherokee County)",
    publisher: "CNN",
    url: "https://www.cnn.com/2023/01/19/us/north-carolina-crypto-mine-noise-weir-wxc/index.html",
    year: "2023",
    kind: "news",
  },
  {
    id: "nbc4-loudoun-noise",
    title: "Neighbors raise concerns about noisy data center in Loudoun County",
    publisher: "NBC4 Washington",
    url: "https://www.nbcwashington.com/news/local/northern-virginia/neighbors-raise-concerns-about-noisy-data-center-in-loudoun/4080249/",
    year: "2026",
    kind: "news",
  },
  {
    id: "mississippi-today-xai-noise",
    title:
      "Southaven residents fear pollution, complain of noise from xAI data center turbines",
    publisher: "Mississippi Today",
    url: "https://mississippitoday.org/2025/11/24/southaven-residents-fear-pollution-complain-of-noise-from-elon-musks-xai-data-center-turbines/",
    year: "2025",
    kind: "news",
  },
  {
    id: "ky-noise-law",
    title: "Kentucky Revised Statutes, Chapter 224 Subchapter 30 (noise policy; no statewide numeric limit)",
    publisher: "Kentucky General Assembly (via Justia)",
    url: "https://law.justia.com/codes/kentucky/2011/224-30",
    kind: "government",
  },
  {
    id: "williamsburg-dbc",
    title:
      "Data center noise rules diverge in York County and James City County (65 dBC low-frequency limit)",
    publisher: "Williamsburg Independent",
    url: "https://www.williamsburgindependent.com/p/data-center-rules-diverge-in-york-county-james-city-county",
    kind: "news",
  },
  {
    id: "ewg-adel",
    title: "Bitcoin mining's noise toll on Adel, Georgia residents",
    publisher: "Environmental Working Group",
    url: "https://www.ewg.org/research/proof-problems-bitcoin-minings-pollution-toll-us-communities/georgia",
    kind: "industry",
    note: "Environmental advocacy group.",
  },
  {
    id: "va-deq-generators",
    title: "Issued air permits for data centers (generator runtime limits)",
    publisher: "Virginia Department of Environmental Quality",
    url: "https://www.deq.virginia.gov/news-info/shortcuts/permits/air/issued-air-permits-for-data-centers",
    kind: "government",
  },

  // ── Power & rates ───────────────────────────────────────────────
  {
    id: "uptime-pue-2024",
    title: "Global Data Center Survey 2024 (industry average PUE 1.56)",
    publisher: "Uptime Institute",
    url: "https://uptimeinstitute.com/uptime_assets/7425ec68d479c5d78a743df94a79b114ed9f9c73f13b6460949d2b8e73373209-GA-2024-07-uptime-institute-global-data-center-survey-results-2024.pdf",
    year: "2024",
    kind: "industry",
  },
  {
    id: "eia-household",
    title:
      "How much electricity does an American home use? (~10,800 kWh/yr average)",
    publisher: "U.S. Energy Information Administration",
    url: "https://www.eia.gov/tools/faqs/faq.php?id=97&t=3",
    kind: "government",
  },
  {
    id: "harvard-eli",
    title:
      "Extracting Profits from the Public: How Utility Ratepayers Are Paying for Big Tech's Power (Martin & Peskoe)",
    publisher: "Harvard Electricity Law Initiative",
    url: "https://eelp.law.harvard.edu/extracting-profits-from-the-public-how-utility-ratepayers-are-paying-for-big-techs-power/",
    year: "2025",
    kind: "peer-reviewed",
  },
  {
    id: "monitoring-analytics-pjm",
    title:
      "Data center load accounted for $6.5 billion (40%) of the December 2025 PJM capacity auction cost",
    publisher: "Utility Dive (citing Monitoring Analytics, PJM's independent market monitor)",
    url: "https://www.utilitydive.com/news/data-centers-pjm-capacity-auction/808951/",
    year: "2025",
    kind: "news",
  },
  {
    id: "pjm-capacity-spike",
    title:
      "PJM capacity prices jumped from $28.92/MW-day (2024/25) to $269.92 (2025/26) to the price cap",
    publisher: "Kleinman Center for Energy Policy, University of Pennsylvania",
    url: "https://kleinmanenergy.upenn.edu/commentary/blog/new-pennsylvania-law-aims-to-protect-ratepayers-from-speculative-data-center-demand/",
    year: "2026",
    kind: "peer-reviewed",
  },
  {
    id: "ieefa-pjm-bills",
    title:
      "Projected data center growth spurs PJM capacity prices by a factor of 10 (~$16–18/month bill impacts)",
    publisher: "Institute for Energy Economics and Financial Analysis",
    url: "https://ieefa.org/resources/projected-data-center-growth-spurs-pjm-capacity-prices-factor-10",
    kind: "industry",
  },
  {
    id: "bloomberg-nodes",
    title:
      "Wholesale electricity prices rose up to 267% since 2020 near major data center clusters (25,000-node analysis)",
    publisher: "Bloomberg",
    url: "https://www.bloomberg.com/graphics/2025-ai-data-centers-electricity-prices/",
    year: "2025",
    kind: "news",
  },
  {
    id: "fortune-not-just-dc",
    title:
      "Electricity bills are surging — and it's not just data centers (counter-analysis)",
    publisher: "Fortune",
    url: "https://fortune.com/2026/05/20/electricity-bills-surging-not-just-data-centers/",
    year: "2026",
    kind: "news",
  },
  {
    id: "aep-ohio-tariff",
    title:
      "AEP Ohio data center tariff settlement: ≥25 MW customers pay for at least 85% of subscribed capacity, up to 12 years",
    publisher: "Data Center Dynamics (PUCO settlement coverage)",
    url: "https://www.datacenterdynamics.com/en/news/ohio-regulators-approve-settlement-requiring-data-centers-to-pay-at-least-85-of-power-costs/",
    year: "2025",
    kind: "news",
  },
  {
    id: "lge-ku-ehlf",
    title:
      "Kentucky PSC approves LG&E/KU 'Extremely High Load Factor' tariff: ≥100 MW customers pay ≥80% of forecast energy for 15 years",
    publisher: "WHAS11 (KY PSC Case 2025-00113/00114 coverage)",
    url: "https://www.whas11.com/article/news/investigations/focus/will-more-data-centers-raise-your-electric-rates/417-41bf5b24-0aed-4c76-8f99-e7278e9c8627",
    year: "2026",
    kind: "news",
  },
  {
    id: "kp-igs-tariff",
    title:
      "Kentucky Power large-load tariff filing (Tariff I.G.S., Case 2024-00305): 20-year terms, collateral for ≥150 MW customers",
    publisher: "Kentucky Public Service Commission filing",
    url: "https://psc.ky.gov/pscscf/2024%20cases/2024-00305/20240830_Kentucky%20Power%20Tariff%20Filing.pdf",
    year: "2024",
    kind: "utility-filing",
  },
  {
    id: "kp-rate-case-2026",
    title:
      "PSC issues final order in Kentucky Power rate case: average residential bill rises 6.63% over two years",
    publisher: "Appalachian News-Express",
    url: "https://www.news-expressky.com/news/psc-issues-final-order-in-kentucky-power-rate-case-average-rate-to-increase-by-6/article_80c577c4-7a26-44c4-b42c-883a464fd334.html",
    year: "2026",
    kind: "news",
  },
  {
    id: "ky-lantern-kp-rates",
    title:
      "State regulator approves reduced increase in Kentucky Power rates following emotional pleas (~162,000 customers)",
    publisher: "Kentucky Lantern",
    url: "https://kentuckylantern.com/2026/03/02/state-regulator-approves-reduced-increase-in-kentucky-power-rates-following-emotional-pleas/",
    year: "2026",
    kind: "news",
  },
  {
    id: "icn-death-spiral",
    title:
      "As coal collapsed, Kentucky Power spread fixed costs across fewer customers — and rates climbed",
    publisher: "Inside Climate News",
    url: "https://insideclimatenews.org/news/14082018/coal-energy-prices-appalachia-mining-electric-bill-kentucky-economy-aep-rates/",
    year: "2018",
    kind: "news",
  },
  {
    id: "weku-mitchell",
    title:
      "Kentucky Power customers will pay to keep Mitchell coal plant running (~$2/month; PSC criticism)",
    publisher: "WEKU",
    url: "https://www.weku.org/the-commonwealth/2026-01-06/kentucky-power-customers-will-pay-to-keep-mitchell-coal-plant-running",
    year: "2026",
    kind: "news",
  },
  {
    id: "hazard-herald-pipeline",
    title:
      "Utilities report as many as 30 data centers under discussion in Kentucky; Kentucky Power calls large loads 'the best vehicle for eventually balancing or lowering electric rates'",
    publisher: "Hazard Herald",
    url: "https://www.hazard-herald.com/news/utilities-report-as-many-as-30-data-centers-under-discussion-in-kentucky/article_db5d06fd-d60f-48a9-9f36-b98ed280753f.html",
    year: "2026",
    kind: "news",
  },
  {
    id: "epic-2026",
    title:
      "Kentucky EPIC Report 2026-001: data centers could bring billions, but the state must set cost-allocation rules first",
    publisher:
      "Kentucky Energy Planning and Inventory Commission / UK Center for Applied Energy Research",
    url: "https://caer.uky.edu/sites/default/files/2026-06/epic-report-no-2026-001.pdf",
    year: "2026",
    kind: "government",
  },
  {
    id: "lpm-lge-gas-plants",
    title:
      "Kentucky regulators grant LG&E/KU permission to build power plants for future data centers (stranded-cost concerns)",
    publisher: "Louisville Public Media",
    url: "https://www.lpm.org/news/2025-10-28/kentucky-regulators-grant-lg-e-ku-permission-to-build-power-plants-for-future-data-centers",
    year: "2025",
    kind: "news",
  },
  {
    id: "utility-dive-phantom",
    title:
      "'Phantom data centers': developers file 5–10× more power requests than will be built, distorting forecasts",
    publisher: "Utility Dive",
    url: "https://www.utilitydive.com/news/a-fraction-of-proposed-data-centers-will-get-built-utilities-are-wising-up/748214/",
    year: "2025",
    kind: "news",
  },
  {
    id: "georgia-power-stipulation",
    title:
      "Georgia Power stipulated agreement: large-load revenue must put 'downward pressure' on rates (≥$556M/yr committed)",
    publisher: "Georgia Power",
    url: "https://www.georgiapower.com/news-hub/press-releases/stipulated-agreement-reached-to-help-keep-electricity-affordable-and-meet-future-energy-demand-in-georgia.html",
    year: "2025",
    kind: "industry",
  },
  {
    id: "georgia-recorder-psc",
    title:
      "Georgia regulators approve massive grid expansion to serve data centers (consumer-group caveats)",
    publisher: "Georgia Recorder",
    url: "https://georgiarecorder.com/2025/12/19/georgia-regulators-approve-massive-power-grid-expansion-to-serve-data-centers/",
    year: "2025",
    kind: "news",
  },
  {
    id: "npr-tmi",
    title:
      "Microsoft signs 20-year deal to restart Three Mile Island Unit 1 (835 MW)",
    publisher: "NPR",
    url: "https://www.npr.org/2024/09/20/nx-s1-5120581/three-mile-island-nuclear-power-plant-microsoft-ai",
    year: "2024",
    kind: "news",
  },
  {
    id: "duke-headroom",
    title:
      "Rethinking Load Growth: curtailing new loads 0.25% of hours frees ~76 GW of existing grid capacity",
    publisher: "Utility Dive (Duke University Nicholas Institute study)",
    url: "https://www.utilitydive.com/news/us-grid-headroom-flexible-load-data-center-ai-ev-duke-report/739767/",
    year: "2025",
    kind: "news",
  },
  {
    id: "google-demand-response",
    title:
      "Google demand-response agreements with Indiana Michigan Power (AEP) and TVA to pause AI workloads at grid peaks",
    publisher: "Data Center Dynamics",
    url: "https://www.datacenterdynamics.com/en/news/google-partners-with-im-and-tva-to-expand-use-of-demand-response-at-its-ai-data-centers/",
    kind: "news",
  },
  {
    id: "lpm-hb593",
    title:
      "GOP bill seeks guardrails for new data centers to 'pay their own way' in Kentucky (died without hearing, 2026)",
    publisher: "Louisville Public Media",
    url: "https://www.lpm.org/news/2026-02-12/gop-bill-seeks-guardrails-for-new-data-centers-to-pay-their-own-way-in-kentucky",
    year: "2026",
    kind: "news",
  },
  {
    id: "semianalysis-electrical",
    title: "Datacenter Anatomy Part 1 — Electrical Systems (interconnection voltages and costs)",
    publisher: "SemiAnalysis",
    url: "https://semianalysis.com/2024/10/14/datacenter-anatomy-part-1-electrical/",
    year: "2024",
    kind: "industry",
  },
  {
    id: "mountain-top-pikeville",
    title:
      "Pikeville reviewing developer's proposal for data center at KY Enterprise Industrial Park",
    publisher: "Mountain Top Media",
    url: "https://mountain-topmedia.com/pikeville-reviewing-developers-proposal-for-data-center-at-ky-enterprise-industrial-park/",
    year: "2026",
    kind: "news",
  },

  // ── Health & perception ─────────────────────────────────────────
  {
    id: "iarc-diesel",
    title: "IARC classifies diesel engine exhaust as carcinogenic to humans (Group 1)",
    publisher: "International Agency for Research on Cancer (WHO)",
    url: "https://www.iarc.who.int/wp-content/uploads/2018/07/pr213_E.pdf",
    year: "2012",
    kind: "government",
  },
  {
    id: "trinity-va-deq",
    title:
      "Virginia DEQ data center air permitting guidance: emergency engines limited (100 hrs/yr federal testing; 500 hrs/yr total in VA), Tier 4 baseline",
    publisher: "Trinity Consultants (regulatory analysis)",
    url: "https://trinityconsultants.com/resources/virginia-department-of-environmental-quality-releases-three-air-permitting-guidance-documents-for-data-centers/",
    year: "2026",
    kind: "industry",
  },
  {
    id: "pec-generators",
    title:
      "~4,700 permitted diesel generators in eastern Loudoun County (DEQ permit data)",
    publisher: "Piedmont Environmental Council",
    url: "https://www.pecva.org/work/energy-work/proposed-increase-to-data-center-diesel-generator-use/",
    kind: "industry",
    note: "Conservation advocacy group; counts drawn from DEQ permit data.",
  },
  {
    id: "ucr-unpaid-toll",
    title:
      "The Unpaid Toll: Quantifying the Public Health Impact of AI (~360 premature deaths in 2023 from data center power emissions, modeled)",
    publisher: "UC Riverside / Caltech",
    url: "https://news.ucr.edu/articles/2024/12/09/ais-deadly-air-pollution-toll",
    year: "2024",
    kind: "peer-reviewed",
  },
  {
    id: "memphis-air-tests",
    title:
      "City of Memphis releases initial air quality testing results: no dangerous levels detected (xAI area)",
    publisher: "City of Memphis",
    url: "https://memphistn.gov/city-of-memphis-releases-initial-air-quality-testing-results-no-dangerous-levels-detected/",
    year: "2025",
    kind: "government",
  },
  {
    id: "techcrunch-memphis-tests",
    title:
      "Air quality tests around xAI's Memphis data center raise questions (ozone not measured)",
    publisher: "TechCrunch",
    url: "https://techcrunch.com/2025/06/25/air-quality-tests-around-xais-memphis-data-center-raise-questions/",
    year: "2025",
    kind: "news",
  },
  {
    id: "conversation-memphis-satellite",
    title:
      "Air quality analysis reveals minimal changes after xAI data center opens in Memphis (satellite study)",
    publisher: "The Conversation (university researchers)",
    url: "https://theconversation.com/air-quality-analysis-reveals-minimal-changes-after-xai-data-center-opens-in-pollution-burdened-memphis-neighborhood-265152",
    kind: "news",
  },
  {
    id: "selc-xai",
    title:
      "xAI operated dozens of unpermitted gas turbines; Shelby County permitted 15 in July 2025; NAACP/SELC appeal",
    publisher: "Southern Environmental Law Center",
    url: "https://www.selc.org/press-release/memphis-health-leaders-grant-air-permit-for-xai-data-center/",
    year: "2025",
    kind: "industry",
    note: "Environmental law nonprofit; party to the litigation.",
  },
  {
    id: "who-emf",
    title:
      "WHO Environmental Health Criteria 238: no established health consequences from low-level power-frequency EMF",
    publisher: "World Health Organization (via European Commission summary)",
    url: "https://ec.europa.eu/health/scientific_committees/opinions_layman/fr/champs-electromagnetiques07/l-3/7-power-lines-elf.htm",
    year: "2007",
    kind: "government",
  },
  {
    id: "cdc-legionella",
    title: "Controlling Legionella in cooling towers (risk and management)",
    publisher: "CDC",
    url: "https://www.cdc.gov/control-legionella/php/toolkit/cooling-towers-module.html",
    kind: "government",
  },
  {
    id: "sfx-newton-wells",
    title:
      "Their water taps ran dry when Meta built next door (Newton County, GA wells)",
    publisher: "San Francisco Examiner / New York Times News Service",
    url: "https://www.sfexaminer.com/their-water-taps-ran-dry-when-meta-built-next-door/article_d37b83df-16f4-5fcb-9b63-958a4d5c3a05.html",
    year: "2025",
    kind: "news",
  },
  {
    id: "pew-2026",
    title:
      "How Americans view data centers' impact: negative on environment and energy costs, positive on jobs and tax revenue",
    publisher: "Pew Research Center",
    url: "https://www.pewresearch.org/short-reads/2026/03/12/how-americans-view-data-centers-impact-in-key-areas-from-the-environment-to-jobs/",
    year: "2026",
    kind: "industry",
  },
  {
    id: "heatmap-2026",
    title:
      "Heatmap/Embold polling: opposition to a nearby data center rose from 42% to 71% in nine months; utility bills the top driver",
    publisher: "Heatmap News",
    url: "https://heatmap.news/daily/data-center-polling",
    year: "2026",
    kind: "news",
  },
  {
    id: "heatmap-bills-blame",
    title:
      "53% of Americans blame data centers for rising electricity costs (up from 28%)",
    publisher: "Heatmap News",
    url: "https://heatmap.news/energy/data-centers-electricity-prices-blame",
    year: "2026",
    kind: "news",
  },
  {
    id: "gmu-property",
    title:
      "George Mason University study: Northern Virginia homes closer to data centers sold for more in 2023",
    publisher: "George Mason University, Schar School",
    url: "https://schar.gmu.edu/news/2025-11/study-home-prices-are-higher-when-house-near-data-center",
    year: "2025",
    kind: "peer-reviewed",
  },
  {
    id: "loudoun-revenue",
    title:
      "Loudoun County: data center tax revenue (~$895M FY2025; projected ~45% of county tax revenue by FY2027)",
    publisher: "Loudoun County, VA government",
    url: "https://www.loudoun.gov/6188/Data-Centers-in-Loudoun-County",
    kind: "government",
  },
  {
    id: "datacenterwatch",
    title:
      "At least 16 data center projects worth ~$64 billion blocked or delayed by local opposition",
    publisher: "Data Center Watch",
    url: "https://www.datacenterwatch.org/report",
    year: "2025",
    kind: "industry",
  },
  {
    id: "dcd-chesterton",
    title: "Application for $1.3bn data center in Chesterton, Indiana withdrawn after opposition",
    publisher: "Data Center Dynamics",
    url: "https://www.datacenterdynamics.com/en/news/application-for-13bn-data-center-in-chesterton-indiana-withdrawn/",
    kind: "news",
  },
  {
    id: "wapo-peculiar",
    title:
      "'Don't Dump Data in Peculiar': Missouri town kills $1.5B data center project",
    publisher: "The Washington Post",
    url: "https://www.washingtonpost.com/technology/2024/10/05/data-center-protest-community-resistance/",
    year: "2024",
    kind: "news",
  },
  {
    id: "news5-new-albany",
    title:
      "Ohio's data center boom started in New Albany: 40 data centers since 2010 (with 15-year 100% property tax abatements)",
    publisher: "News 5 Cleveland",
    url: "https://www.news5cleveland.com/news/local-news/ohios-data-center-boom-really-started-in-new-albany-we-went-there-to-see-what-it-looks-like",
    kind: "news",
  },
  {
    id: "signal-ohio-abatements",
    title: "Ohio data centers have claimed ~$2.5 billion in tax breaks since 2017",
    publisher: "Signal Ohio",
    url: "https://signalohio.org/data-centers-have-claimed-2-5-billion-in-tax-breaks-since-2017-report-says/",
    year: "2025",
    kind: "news",
  },
  {
    id: "ky-lantern-pause",
    title: "Some Kentucky counties and cities are hitting pause on data centers",
    publisher: "Kentucky Lantern",
    url: "https://kentuckylantern.com/2026/06/08/some-kentucky-counties-and-cities-are-hitting-pause-on-data-centers/",
    year: "2026",
    kind: "news",
  },
  {
    id: "kjzz-tucson",
    title: "Tucson council unanimously rejected 'Project Blue' over water concerns",
    publisher: "KJZZ",
    url: "https://www.kjzz.org/the-show/2025-12-09/rejected-by-tucson-and-abandoned-by-amazon-project-blue-data-center-moves-forward",
    year: "2025",
    kind: "news",
  },
  {
    id: "eea-noise-deaths",
    title:
      "Environmental noise causes ~12,000 premature deaths and 48,000 new cases of heart disease per year in Europe",
    publisher: "European Environment Agency",
    url: "https://www.eea.europa.eu/publications/health-risks-caused-by-environmental",
    kind: "government",
  },

  // ── Water & cooling ─────────────────────────────────────────────
  {
    id: "uptime-water",
    title:
      "Don't ignore water consumption (cooling-tower facility ≈ 6.75M gallons/yr per MW; system comparisons)",
    publisher: "Uptime Institute",
    url: "https://journal.uptimeinstitute.com/dont-ignore-water-consumption/",
    kind: "industry",
  },
  {
    id: "epa-watersense-towers",
    title:
      "WaterSense at Work, Section 6.3: Cooling Towers (evaporation, blowdown, cycles of concentration)",
    publisher: "U.S. EPA",
    url: "https://www.epa.gov/system/files/documents/2023-05/ws-commercial-watersense-at-work_Section_6.3_Cooling_Towers.pdf",
    kind: "government",
  },
  {
    id: "microsoft-zero-water",
    title:
      "Sustainable by design: next-generation datacenters consume zero water for cooling (closed-loop design, >125M liters/yr avoided)",
    publisher: "Microsoft",
    url: "https://www.microsoft.com/en-us/microsoft-cloud/blog/2024/12/09/sustainable-by-design-next-generation-datacenters-consume-zero-water-for-cooling/",
    year: "2024",
    kind: "industry",
  },
  {
    id: "meta-edi",
    title:
      "Meta 2023 Environmental Data Index (fleet WUE 0.20 L/kWh; direct vs electricity-embedded water)",
    publisher: "Meta",
    url: "https://sustainability.atmeta.com/wp-content/uploads/2023/07/Meta-2023-Environmental-Data-Index.pdf",
    year: "2023",
    kind: "industry",
  },
  {
    id: "google-cooling-blog",
    title:
      "Our commitment to climate-conscious data center cooling (~450,000 gallons/day average campus)",
    publisher: "Google",
    url: "https://blog.google/company-news/outreach-and-initiatives/sustainability/our-commitment-to-climate-conscious-data-center-cooling/",
    year: "2022",
    kind: "industry",
  },
  {
    id: "siddik-2021",
    title:
      "The environmental footprint of data centers in the United States (≈75% of water footprint is indirect, via power plants)",
    publisher: "Environmental Research Letters (Siddik, Shehabi & Marston)",
    url: "https://iopscience.iop.org/article/10.1088/1748-9326/abfba1",
    year: "2021",
    kind: "peer-reviewed",
  },
  {
    id: "register-dalles",
    title:
      "Google's data centers used 355.1 million gallons in The Dalles in 2021 — 29% of the city's water (disclosed after a records lawsuit)",
    publisher: "The Register",
    url: "https://www.theregister.com/2022/12/19/google_datacenters_dalles/",
    year: "2022",
    kind: "news",
  },
  {
    id: "opb-dalles-deal",
    title:
      "Google's $28.5M water infrastructure deal with The Dalles (wells, reservoirs, aquifer storage)",
    publisher: "Oregon Public Broadcasting",
    url: "https://www.opb.org/article/2021/09/29/google-water-data-center-the-dalles-oregon/",
    year: "2021",
    kind: "news",
  },
  {
    id: "wpr-mount-pleasant",
    title:
      "Microsoft's closed-loop Wisconsin data centers: 2.8M gallons/yr Phase 1, ~8.4M gallons/yr at later phases",
    publisher: "Wisconsin Public Radio",
    url: "https://www.wpr.org/news/microsoft-data-centers-8-million-gallons-water-each-year",
    kind: "news",
  },
  {
    id: "nbc-mesa",
    title:
      "Drought-stricken communities push back against data centers (Mesa AZ tiered water deal: 1–4 million gallons/day)",
    publisher: "NBC News",
    url: "https://www.nbcnews.com/tech/internet/drought-stricken-communities-push-back-against-data-centers-n1271344",
    kind: "news",
  },
  {
    id: "aztech-goodyear",
    title:
      "Microsoft agrees to make Goodyear AZ data centers air-cooled amid water constraints (~160M liters/yr saved)",
    publisher: "Arizona Technology Council",
    url: "https://www.aztechcouncil.org/microsoft-agrees-to-make-data-centers-air-cooled-amid-water-infrastructure-challenges-in-goodyear/",
    kind: "industry",
  },
  {
    id: "wreg-xai-water",
    title:
      "xAI breaks ground on $80M wastewater recycling plant in Memphis (13M gallons/day design)",
    publisher: "WREG Memphis",
    url: "https://wreg.com/news/local/xai-memphis/xai-holds-ceremony-for-80m-water-recycling-plant/",
    year: "2025",
    kind: "news",
  },
  {
    id: "loudoun-water-reclaimed",
    title:
      "Loudoun Water reclaimed water program: 750M+ gallons of recycled water delivered to data centers in 2025",
    publisher: "Loudoun Water",
    url: "https://www.loudounwater.org/commercial-customers/reclaimed-water-program",
    kind: "government",
  },
  {
    id: "dcd-douglas-county",
    title:
      "Google uses recycled wastewater at its Douglas County, Georgia data center",
    publisher: "Data Center Dynamics",
    url: "https://www.datacenterdynamics.com/en/news/google-uses-recycled-water-at-georgia-data-center/",
    kind: "news",
  },
  {
    id: "clearcomfort-tradeoff",
    title:
      "The water-energy trade-off in data center cooling choices (evaporative saves 10–35% electricity vs air-cooled)",
    publisher: "Clear Comfort (industry analysis)",
    url: "https://clearcomfort.com/water-energy-trade-off-cooling-choices-data-center-use/",
    kind: "industry",
  },
  {
    id: "arxiv-municipal",
    title:
      "Data centers on public water systems: peak-day demand factors (~3.6×) matter more than annual volume",
    publisher: "arXiv preprint (academic, not yet peer-reviewed)",
    url: "https://arxiv.org/pdf/2603.02705",
    year: "2026",
    kind: "peer-reviewed",
  },
  {
    id: "eesi-water",
    title: "Data centers and water consumption (overview with national figures)",
    publisher: "Environmental and Energy Study Institute",
    url: "https://www.eesi.org/articles/view/data-centers-and-water-consumption",
    kind: "industry",
  },

  // ── Water quality, discharge & contamination ────────────────────
  {
    id: "clee-berkeley-water",
    title:
      "Regulating Data Center Water Use in California (cooling wastewater can carry concentrated minerals, chemical additives, and other pollutants)",
    publisher:
      "Center for Law, Energy & the Environment, UC Berkeley School of Law",
    url: "https://www.law.berkeley.edu/research/clee/research/wheeler/water-innovation/data-center-water-use/",
    year: "2026",
    kind: "peer-reviewed",
  },
  {
    id: "epa-pretreatment",
    title:
      "National Pretreatment Program (how industrial discharges into municipal sewer systems are regulated)",
    publisher: "U.S. EPA",
    url: "https://www.epa.gov/npdes/national-pretreatment-program",
    kind: "government",
  },
  {
    id: "epa-npdes-basics",
    title:
      "NPDES Permit Basics (Clean Water Act permits for direct discharges: numeric limits, monitoring, public reporting)",
    publisher: "U.S. EPA",
    url: "https://www.epa.gov/npdes/npdes-permit-basics",
    kind: "government",
  },
  {
    id: "epa-quincy-reuse",
    title:
      "Water Reuse Case Study: Quincy, Washington (data center discharge pushed TDS past state guideline; Microsoft-funded $31M reuse utility opened 2021)",
    publisher: "U.S. EPA",
    url: "https://www.epa.gov/waterreuse/water-reuse-case-study-quincy-washington",
    kind: "government",
  },
  {
    id: "sierra-dalles-critfc",
    title:
      "Data Centers Are Hogging This Town's Water (CRITFC to Oregon governor's task force: thermal stress, undisclosed chemicals including PFAS and biocides, no spill planning)",
    publisher: "Sierra (Sierra Club magazine)",
    url: "https://www.sierraclub.org/sierra/data-centers-are-hogging-town-s-water",
    year: "2026",
    kind: "news",
    note: "Published by the Sierra Club, an environmental advocacy organization.",
  },
  {
    id: "cbs-atlanta-epa-water",
    title:
      "AOC presses EPA over Morgan County drinking water concerns as Meta defends Georgia data center operations (EPA fact-gathering, not a formal investigation)",
    publisher: "CBS News Atlanta",
    url: "https://www.cbsnews.com/atlanta/news/aoc-presses-epa-over-morgan-county-drinking-water-concerns-tied-to-georgia-data-center-development/",
    year: "2026",
    kind: "news",
  },
  {
    id: "epa-ust",
    title:
      "Learn About Underground Storage Tanks (leaking USTs are a common source of groundwater contamination; petroleum contains benzene, a known carcinogen)",
    publisher: "U.S. EPA",
    url: "https://www.epa.gov/ust/learn-about-underground-storage-tanks-usts",
    kind: "government",
  },
  {
    id: "epa-spcc",
    title:
      "Oil Spill Prevention and Preparedness Regulations (SPCC plans to keep stored oil out of waterways)",
    publisher: "U.S. EPA",
    url: "https://www.epa.gov/oil-spills-prevention-and-preparedness-regulations",
    kind: "government",
  },
  {
    id: "gigafact-wells",
    title:
      "Can data centers contaminate wells and other water sources? (fact brief: yes — via diesel leaks or improper wastewater discharge, if containment fails)",
    publisher: "Gigafact / Maine Trust for Local News",
    url: "https://gigafact.org/fact-briefs/can-data-centers-contaminate-wells-and-other-water-sources-fact-brief/",
    year: "2026",
    kind: "news",
  },

  // ── Waste-heat reuse ────────────────────────────────────────────
  {
    id: "ramboll-odense",
    title:
      "Meta surplus heat to district heating, Odense, Denmark (215,000 MWh/yr recovered, ~45 MW heat plant)",
    publisher: "Ramboll (project engineer)",
    url: "https://www.ramboll.com/en-us/projects/energy/meta-surplus-heat-to-district-heating",
    kind: "industry",
  },
  {
    id: "fortum-microsoft",
    title:
      "Fortum starts heat production at two Microsoft data center sites in Finland (up to 180 MW of district heat; ~40% of Espoo-area demand for 250,000 heat users)",
    publisher: "Fortum",
    url: "https://www.fortum.com/en/media/2026/05/fortum-has-started-heat-production-two-large-data-centre-sites-finland",
    year: "2026",
    kind: "industry",
  },
  {
    id: "google-hamina-heat",
    title:
      "Google's first offsite heat recovery project: Hamina data center to cover up to 80% of the town's district heating demand, free of charge",
    publisher: "Google",
    url: "https://blog.google/company-news/inside-google/around-the-globe/google-europe/our-first-offsite-heat-recovery-project-lands-in-finland/",
    kind: "industry",
  },
  {
    id: "stockholm-data-parks",
    title:
      "Stockholm Data Parks: the city's utility pays data centers for their waste heat",
    publisher: "Stockholm Data Parks (City of Stockholm / Stockholm Exergi)",
    url: "https://stockholmdataparks.com/",
    kind: "government",
  },
  {
    id: "amazon-denny",
    title:
      "Amazon's Seattle towers are heated by a neighboring data-dense building's waste heat (~5 MW transferred)",
    publisher: "The Seattle Times",
    url: "https://www.seattletimes.com/business/real-estate/amazon-towers-will-be-heated-by-neighbors-excess-energy/",
    kind: "news",
  },
  {
    id: "nd-greenhouse",
    title:
      "Notre Dame server racks heat the South Bend municipal greenhouse (~$70,000/yr heating savings for the city)",
    publisher: "University of Notre Dame",
    url: "https://news.nd.edu/news/greenhouses-and-ldquogreenrdquo-computing/",
    kind: "peer-reviewed",
  },
  {
    id: "deep-green-pool",
    title:
      "Exmouth swimming pool heated by a 28 kW micro data center — pool gas use cut 62%, ~£20,000/yr saved",
    publisher: "East Devon District Council",
    url: "https://eastdevon.gov.uk/news/2023/03/exmouth-swimming-pool-is-heated-by-a-uk-first-in-technology-heating-solutions/",
    year: "2023",
    kind: "government",
  },
  {
    id: "eesi-thermal",
    title:
      "Thermal energy networks: why US data center heat reuse is rare (low-grade ~100°F heat; no district heating networks)",
    publisher: "Environmental and Energy Study Institute",
    url: "https://www.eesi.org/articles/view/thermal-energy-networks-turn-data-center-waste-heat-into-a-hot-commodity",
    kind: "industry",
  },
  {
    id: "dck-heat-grade",
    title:
      "Heat reuse strategies for liquid-cooled data centers (air cooling ~35–40°C exhaust vs ~50–60°C water from direct-to-chip)",
    publisher: "Data Center Knowledge",
    url: "https://www.datacenterknowledge.com/cooling/heat-reuse-strategies-for-liquid-cooled-data-centers",
    kind: "news",
  },
  {
    id: "germany-enefg",
    title:
      "Germany's Energy Efficiency Act: new data centers must reuse 10–20% of their energy as heat (phasing in 2026–2028)",
    publisher: "White & Case (legal analysis)",
    url: "https://www.whitecase.com/insight-alert/data-center-requirements-under-new-german-energy-efficiency-act",
    kind: "industry",
  },
  {
    id: "reimagine-appalachia",
    title:
      "Turning a byproduct into a community asset: why data center waste heat matters for Appalachia",
    publisher: "ReImagine Appalachia",
    url: "https://reimagineappalachia.org/turning-a-byproduct-into-a-community-asset-why-data-center-waste-heat-matters/",
    kind: "industry",
    note: "Regional policy advocacy group.",
  },

  // ── Leveraging the deal: budgets, funds & precedents ────────────
  {
    id: "pikeville-audit-2024",
    title:
      "City of Pikeville FY2024 audited financial statements (general fund: occupational license fees $12.23M, property taxes $1.07M; 2.0% occupational fee)",
    publisher: "City of Pikeville, KY (independent audit)",
    url: "https://pikevilleky.gov/wp-content/uploads/2025/01/AUDIT-2024.pdf",
    year: "2024",
    kind: "local",
  },
  {
    id: "pikeville-budget-2026",
    title:
      "Pikeville budget focuses on public safety, development (FY2026: ~$28M general fund expenses; occupational payroll tax projected over $10M)",
    publisher: "Appalachian News-Express",
    url: "https://www.news-expressky.com/news/pikeville-budget-focuses-on-public-safety-development/article_f3517a36-9129-4444-9b7e-aef0fd2bec64.html",
    year: "2025",
    kind: "news",
  },
  {
    id: "wv-hb2014",
    title:
      "West Virginia HB 2014 (2025), enrolled text: high-impact data center property taxes distributed 50% to a Personal Income Tax Reduction Fund, 30% to the host county",
    publisher: "West Virginia Legislature",
    url: "https://www.wvlegislature.gov/bill_status/bills_text.cfm?billdoc=hb2014+sub1+enr.htm&yr=2025&sesstype=RS&billtype=B&houseorig=H&i=2014",
    year: "2025",
    kind: "government",
  },
  {
    id: "wv-hb2014-counties",
    title:
      "Tax formula amended after West Virginia counties push back on data center bill (host-county share raised to 30%)",
    publisher: "Parkersburg News and Sentinel",
    url: "https://www.newsandsentinel.com/news/business/2025/04/power-play-tax-formula-amended-after-west-virginia-counties-push-back-on-morrisey-data-centers/",
    year: "2025",
    kind: "news",
  },
  {
    id: "wvcbp-hb2014",
    title:
      "HB 2014 would divert millions annually in local property tax revenue for schools and public safety to fund income tax cuts",
    publisher: "West Virginia Center on Budget & Policy",
    url: "https://wvpolicy.org/hb-2014-would-preempt-local-control-divert-millions-annually-in-local-property-tax-revenue-for-schools-and-public-safety-to-fund-income-tax-cuts/",
    year: "2025",
    kind: "industry",
    note: "Progressive policy group; critical perspective on the fund-diversion model.",
  },
  {
    id: "loudoun-faq-residents",
    title:
      "How does data center revenue affect residents? (real property tax rate cut every year for a decade; 38% of general fund revenue; $100M+ new revenue per year)",
    publisher: "Loudoun County, VA government",
    url: "https://www.loudoun.gov/Faq.aspx?QID=1793",
    kind: "government",
  },
  {
    id: "apfc",
    title:
      "Alaska Permanent Fund Corporation (oil revenue invested on behalf of current and future Alaskans; fund ~$85 billion, FY2025)",
    publisher: "Alaska Permanent Fund Corporation",
    url: "https://apfc.org/",
    kind: "government",
  },
  {
    id: "ak-pfd-2025",
    title:
      "Department of Revenue announces 2025 Permanent Fund Dividend amount ($1,000 per eligible Alaskan)",
    publisher: "Alaska Department of Revenue",
    url: "https://dor.alaska.gov/department-of-revenue/news-detail/2025/09/22/department-of-revenue-announces-2025-permanent-fund-dividend-amount",
    year: "2025",
    kind: "government",
  },
  {
    id: "nm-landgrant",
    title:
      "New Mexico taps Land Grant Permanent Fund for early care and education (2022 constitutional amendment: +1.25% draw, 60% to early childhood, ~$150M/yr)",
    publisher: "New America",
    url: "https://www.newamerica.org/education-policy/edcentral/new-mexico-taps-land-grant-permanent-fund-for-early-care-and-education/",
    year: "2022",
    kind: "industry",
    note: "Think tank analysis of the amendment mechanics.",
  },
  {
    id: "nd-legacy",
    title:
      "North Dakota Legacy Fund (oil tax revenue; earnings defined as a percent of 5-year average value; $686.9M transferred to the state general fund, 2023–25 biennium)",
    publisher: "Office of the North Dakota State Treasurer",
    url: "https://www.treasurer.nd.gov/north-dakota-legacy-fund-0",
    kind: "government",
  },
  {
    id: "krs-66-480",
    title:
      "KRS 66.480: Investment of public funds — what Kentucky local governments may invest in (government obligations, insured or collateralized deposits, highly rated paper)",
    publisher: "Kentucky General Assembly",
    url: "https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=53011",
    kind: "government",
  },

  // ── Eastern Kentucky track record ───────────────────────────────
  {
    id: "gem-belfry",
    title:
      "Blockware Solutions Pike County facility (Belfry): 30 MW operating, former coal washing plant",
    publisher: "Global Energy Monitor",
    url: "https://www.gem.wiki/Blockware_Solutions_Pike_County_facility",
    kind: "industry",
  },
  {
    id: "ky-lantern-cig",
    title:
      "Pike County crypto mining operation approved for electricity discounts — with conditions (CIG/Kentucky Power special contract, 2023)",
    publisher: "Kentucky Lantern",
    url: "https://kentuckylantern.com/2023/09/19/pike-county-crypto-mining-operation-approved-for-electricity-discounts-with-conditions/",
    year: "2023",
    kind: "news",
  },
  {
    id: "middlesboro-cig",
    title:
      "Pike County crypto mining operation to get utility discounts (CIG reported 10 employees hired, 3 more planned)",
    publisher: "Middlesboro News",
    url: "https://middlesboronews.com/2023/09/21/pike-county-crypto-mining-operation-to-get-utility-discounts/",
    year: "2023",
    kind: "news",
  },
  {
    id: "lex18-wolfe",
    title:
      "Neighbors say crypto mine in rural Wolfe County is causing a nuisance (24/7 fan noise; promised wall became 'sound blankets')",
    publisher: "LEX 18 Investigates",
    url: "https://www.lex18.com/news/lex-18-investigates/neighbors-say-crypto-mine-in-rural-wolfe-county-is-causing-a-nuisance",
    kind: "news",
  },
  {
    id: "kentuckynewera-crypto",
    title:
      "Kentucky's crypto-mining promises were 'not always fulfilled' — Jenkins facility never switched on; jobs never materialized (AP)",
    publisher: "Kentucky New Era (Associated Press)",
    url: "https://www.kentuckynewera.com/cadiz_record/news/article_0865bed4-2e61-5d2b-9b99-fb842319238f.html",
    kind: "news",
  },
  {
    id: "utilitydive-ebon",
    title:
      "Kentucky PSC rejects Kentucky Power's 250 MW crypto-mining contract at the former Big Sandy plant site (Louisa), citing ratepayer risk",
    publisher: "Utility Dive",
    url: "https://www.utilitydive.com/news/kentucky-psc-aep-kentucky-power-cryptomining-power-supply-ebon/692237/",
    year: "2023",
    kind: "news",
  },

  // ── Park location & site facts ──────────────────────────────────
  {
    id: "oneeastky-packet",
    title:
      "Kentucky Enterprise Industrial Park marketing packet (coordinates, lot layout, elevation 1,250–1,325 ft, infrastructure)",
    publisher: "One East Kentucky / City of Pikeville",
    url: "https://www.whypikeville.com/sites/default/files/Kentucky%20Enterprise%20Industrial%20Park%20Packet-One%20East%20Kentucky.pdf",
    kind: "government",
  },
  {
    id: "kyced-listing",
    title:
      "Kentucky Enterprise Industrial Park state site listing (479 Industry Dr; 190 acres; site 195-013)",
    publisher: "Kentucky Cabinet for Economic Development (ZoomProspector)",
    url: "https://properties.zoomprospector.com/kentucky/property/479-Industry-Dr-Pikeville-KY-41501-Pikeville-Kentucky/3869E090-9298-4546-9F5E-6C0B855E45DC",
    kind: "government",
  },
  {
    id: "newsexpress-buildready",
    title:
      "Build-Ready site at industrial park nears completion (Lot A-3: 100,000 sq ft pad, 9.32 buildable acres, $4M project)",
    publisher: "Appalachian News-Express",
    url: "https://www.news-expressky.com/news/build-ready-site-at-industrial-park-nears-completion/article_37af13b3-a3ad-41b7-a85c-398d9bbe9572.html",
    kind: "news",
  },
  {
    id: "lanereport-aml",
    title:
      "Pikeville receives $5M Abandoned Mine Lands grant to build industrial park on reclaimed mine land",
    publisher: "The Lane Report",
    url: "https://www.lanereport.com/68706/2016/10/pikeville-receives-5m-grant-to-build-industrial-park-on-reclaimed-mine-land/",
    year: "2016",
    kind: "news",
  },
];

const byId = new Map(sources.map((s) => [s.id, s]));
const numberById = new Map(sources.map((s, i) => [s.id, i + 1]));

export function getSource(id: string): Source | undefined {
  return byId.get(id);
}

export function sourceNumber(id: string): number {
  return numberById.get(id) ?? 0;
}
