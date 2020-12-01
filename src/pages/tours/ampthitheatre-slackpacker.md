---
# For internal use do not change
templateKey: tour-page
# Important for SEO
meta:
  # The text "| Active Escapes" will be appended to it. In total it shouldn't be more than 72 characters long
  title: Amphitheatre Heritage Hike, Northern Drakensberg
  # Maximum 150 characters
  description: Hike to the 'Roof of Africa' and source of the Tugela. Previously only attainable to experienced mountaineers, this is a guided slackpacking trail overnighting in comfy lodges with catering.
# one of the destinations under src/pages/destination folder. Use the same words field value "code"
destination: drakensberg
# one of the activities under src/pages/activity folder. Use the same words field value "code"
# featured: If the tour is to be shown on the activity page and in what order. If not featured o the value must be 0.
activity:
  - name: hiking
    featured: 1
    # use on the tour card if the tour is a featured tour on a activity page
    listing:
      image: ../../img/listing/img-03-amphi.jpg
      tagline: Aim for the summit
      title: Hike to the Roof of Africa
      description: 'Reach the top of the escarpment and source of the Tugela River, where you can stand atop the second highest waterfall in the world. On our 3 day Amphitheatre hike you’ll overnight in comfy mountain lodges, have your meals catered for, and can have your backpack portered.'
# one of the subActivities under src/data/sub-activity folder. Use the same words field value "code". If you need another one, contact me. This is use as a filter on destination page.
subActivity:
  - expedition
# This is the generic name of the tour. Used as the tour heading on tour page
tourName: Amphitheatre Heritage Hike
# mandatory. This is part of the tour url. Exaple: https://www.active-escapes/drakensberg/hiking/amphitheatre-slackpacker
slug: ampthitheatre-slackpacker

# Main portrait-like image on tour page. Try to use same dimensions as this one
featuredImage: ../../img/generic/pp-amphi-966.jpg
# Text under heading on tour page
longDescription:
  - A mighty wall of basalt which rises over 1000m from the Tugela Valley to the Lesotho plateau nearly 3000m above sea level, the Northern Drakensberg's Amphitheatre, gains much of its aesthetic appeal from its near perfect symmetry. Extending as a sheer rock wall - 5km in length from the Eastern Buttress to Sentinel Peak in the west - the Amphitheatre provides an unmistakable horizon.
  - The Tugela Falls, the world's second tallest falls (and the highest in Africa), plunges 948m over the basalt face of the Amphitheatre, down to Royal Natal Park below.
  - 'Our Amphitheatre Slackpacking Trail (AST) has been designed to enable walkers of average fitness to reach the summit and be rewarded by never-to-be-forgotten views: a feat normally only undertaken by  experienced hikers who would camp overnight in tents or caves.'
# Used on tour cards on Recently Views tours section and destination page. As requested is not shown on tour page or other tour cards. Leave blank if not to be shown
fromPricing: R6200
# One of the difficulty levels under folder src/data/difficulty-level. Use the same words field value "code"
difficultyLevel: challenging
# Self explanatory
duration: 3 Days
# Tour specifics to be shown under long description on tour page
details:
  - heading: Trip Duration
    description:
      - 3 Hike Days / 3 Nights
      - '* Extra days available'
  - heading: Daily Distances
    description:
      - 'Day 1: 15km / 5-6.5hr (1273m Asc)'
      - 'Day 2: 16km / 6-7hr (985m Asc)'
      - 'Day 3: 11km / 4-5hrs (391m Asc)'
  - heading: Trail Grading
    description:
      - <strong> 3.5 / 5 </strong> for both <strong>Fitness</strong> and <strong>Technicality</strong>
      - Some steep ascents on Day 1 & 2 but without a heavy backpack. A head for heights needed on Day 2 (the chain ladders and top of the escarpment), but there is also a gully alternative to the chain-ladders.
  - heading: Trail Terrain
    description:
      - Starting at an altitude of 1500m going up through grasslands & protea stands to an altitude of 2286m (Witsieshoek) and 3150m on the top of Beacon Buttress, watershed of the Orange & Tugela Rivers.
  - heading: Accommodation
    description:
      - 1 Night at Cavern Berg Hotel - Northern Drakensberg Valley
      - 2 Nights at Witsies Mountain Lodge
  - heading: Logistic Support
    description:
      - 'Fully-catered trail, sleeping in comfortable lodges'
      - 'Guide for first 2 days but self-guided on 3rd day (easy descent).'
      - '* Optional: Porter-Support'
  - heading: Group Size
    description:
      - Possible from <strong>1 </strong>person. No max, but <strong>12</strong> pax max / per guide.
  - heading: Pricing
    description:
      - '<strong>R4,200</strong> or <strong>R6,200/pp</strong> (based on 6 persons) – dependent on accom and catering options selected.'
# Subject of the email on "book now" button
emailSubject: Amphitheatre Hike Enquiry – PP Enquire Now
# overview tab on tour page
overview:
  heading: At a Glance
  description:
    - By spending 3 days and 3 nights on the route, staying at conveniently located lodges along the way, and accompanied by an experienced trail guide, it is possible for anyone who is reasonably fit to summit the escarpment. This hike has been planned so that you can walk at a comfortable pace and not be encumbered by a heavy backpack. At the end of the day, you can relax at your lodgings where a soak in the tub, delicious food, and a comfy bed will certainly beat tinned bully beef and a thermorest!
    - On this trail, you'll do 40 kilometres over 3 days of hiking with an altitude gain of 1300m, so it is not a hike for the faint-hearted, but the views are worth every drop of sweat.
# itineary tab on tour page
itinerary:
  itinerary:
    - heading: Day 1
      subHeading: Arrival Day
      description:
        - 'Self-drive drive to <strong>Cavern Hotel</strong>, Northern Drakensberg   (3.5hrs from Durban/ 4hrs from JHB).'
        - 'Overnight: Cavern Hotel (Dinner provided)'
    - heading: Day 2
      subHeading: 'Hike Day 1: Cavern – Witsies Mountain Lodge (15km / 1273m total ascent)'
      description:
        - After a hearty breakfast at the Cavern, a guide from the Cavern will accompany you on today’s hike up and over the sandstone cliffs, via Lone Rock (San rock art), through Sugar loaf gap, and along the ridge bypassing broom hill with sweeping views across to the former homeland QwaQwa and Metsi Matsho Dam.
        - 'Overnight: <strong>Witsies Mountain Lodge</strong> - Opt A: Sentinel Chalets. Opt B: Hikers Cabin (Breakfast & Packed Lunch from the Cavern (Opt A&B). Dinner at Mountain Lodge – Opt A)'
    - heading: Day 3
      subHeading: 'Hike Day 2: Sentinel Car Park – Tugela Falls Summit – Sentinel Car Park (16km return hike / 985m total ascent)'
      description:
        - Vehicle transfer provided up to Sentinel Car Park (8km / approx 30min transfer).
        - Today’s trail starts with a well-trodden path which ascends gradually towards the Witches and Zigzags, taking you to the base of the Sentinel massif. From here you’ll follow the contour path below the Western buttress, with the land sloping steeply to the north and east giving you wonderful views of the Maluti’s.
        - The chain ladders are reached after about 3km. After negotiating the 35m ascent on the chainladders, it is only a short scramble from there to the escarpment top, where you can spend the better part of the day in exploration. Mont-aux-Sources (highest peak in the area) and the top of the Tugela Falls are highlights.
        - Return transfer back to Witsies from Sentinel car park.
        - 'Overnight: <strong>Witsies Mountain Lodge</strong> - Opt A: Sentinel Chalets. Opt B: Hikers Cabin (Dinner Bed & Breakfast + Packed Lunch – on Opt A)'
    - heading: Day 4
      subHeading: 'Hike Day 3: Witsies Mountain Lodge – Royal Natal – return by vehicle to Cavern. (11km hike /391m Ascent/ -813m Descent)'
      description:
        - <strong>Self-guided</strong> hike down the Mahai valley with waterfalls and natural swimming pools along the way.
        - 'Private collection from <strong>Royal Natal</strong> & transfer back to vehicle(s) left at the Cavern'
        - (Breakfast &  Trail lunch from Mountain Lodge - Opt A)
  images:
    - src: ../../img/gallery/amphi_chains.jpg
      heading: Climbing the Chainladders to the Top
      subHeading: 'The chainladders are securely bolted to the rock, but there is the gully alternative for those who cant face them - Day 2 of the Amphi Hike. '

# lodging tab on tour page
lodging:
  heading: 'Lodges'
  description:
    - 1 Night at <strong>Cavern Berg Hotel</strong> –  family friendly owner-run hotel in serene setting with plenty on the go. Standard rooms, but for just a little extra, upgrade to superior rooms with private gardens overlooking indigenous forest. A post-hike night is recommended, with a massage at their Forest Spa.
    - 2 Nights at <strong>Witsieshoek Mountain Lodge</strong> -  one of the highest lodges in South Africa and as close a bed as you get to the summit. The recently renovated Sentinel chalets offer breath-taking views of the Drakensberg  Amphitheatre.
  images:
    - src: ../../img/gallery/amphi_cavern_stdroom.jpg
      heading: Standard Room at the Cavern
      subHeading: ''
    - src: ../../img/gallery/amphi_sentinelchalet.jpg
      heading: Sentinel Chalet at Witsies Mountain Lodge
      subHeading: 'Offer stunning views across to the Amphitheatre'
# faq tab on tour page
faq:
  faq:
    - question: Do we carry our own backpacks?
      answer:
        - Unfortunately, vehicle luggage support is not viable on this hike as it is a 6hr round trip from Cavern to Witsies. However, porters (as an optional extra) can be arranged to assist with your main backpack on the way up and back down (on day 1 & 3). However, as all meals, towels and bedding are provided, you literally just need to bring your clothes for 2 days/2 nights on the mountain, so you should get away with a light pack.
    - question: What type of footwear is appropriate?
      answer:
        - Worn in hiking boots or a more rugged hiking shoe with a decent rubber sole.
    - question: What is the best time of year for this trail?
      answer:
        - In the high berg, one can experience 4 seasons in a day. Autumn (Mar-May) and Spring (mid August - Oct) are some of the best months, but for the most stable weather, winter months (June-July) can be the best – chilly starts but generally warm and dry days with a warm lodge to snuggle down overnight.  Afternoon thunderstorms are most common in the hottest months (Nov-Feb).
    - question: Can this hike be shortened to two days?
      answer:
        - A frequently asked question and unfortunately not an option unless you willing to forgo the middle ‘highlight’ day which takes you to the top of the escarpment and the top of the Tugela Falls. However, you can be back at Cavern by midday on the final day, so there is still time to catch an evening flight out of King Shaka (Durban) or OR Thambo (JHB).
# gallery tab on tour page
gallery:
  pictures:
    - src: ../../img/gallery/amphi_amphi.jpg
      caption: One of the most recognisable parts of the Drakensberg – the Amphitheatre, Northern Berg.
    - src: ../../img/gallery/amphi_chains.jpg
      caption: The chain-ladders consist of two parts, ascending 35m on to the top of the escarpment. Amphitheatre, Northern Drakensberg.
    - src: ../../img/gallery/amphi_falls.jpg
      caption: The Tugela Falls, Africa’s highest waterfall, drops 614m over the Drakensberg escarpment.
    - src: ../../img/gallery/amphi_edge.jpg
      caption: The view from the ‘roof of South Africa’ – Amphitheatre, Northern Berg.
    - src: ../../img/gallery/amphi_gully.jpg
      caption: Up or down the gully is an alternative for those who don’t like the exposure of the chain-ladders. The guide will often take you up the chainladders and back down the gully.
    - src: ../../img/gallery/amphi_ladders2.jpg
      caption: There are two ladders, useful for large groups, or to ascend alongside your friend.
    - src: ../../img/gallery/amphi_mahai.jpg
      caption: The third day’s route down the Mahai valley is an easy self-guided day.
    - src: ../../img/gallery/amphi_swimhole.jpg
      caption: During summer months, a dip in one of the Tugela pools before it plunges over the edge, may be enticing.
    - src: ../../img/gallery/amphi_top.jpg
      caption: Top of the Amphitheatre with the Sentinel Massif in the background.
    - src: ../../img/gallery/amphi_headwater.jpg
      caption: Headwaters of the Tugela river, as hikers make their way towards Mont-Aux-Sources –  one of the highest points of the Drakensberg range lying within Lesotho, the province of the Free State and KwaZulu-Natal.
    - src: ../../img/gallery/amphi_footpath.jpg
      caption: Start of Day 2 – the basalt cap of the Amphitheatre looms large.  You will be heading up and over.
# price tab on tour page
price:
  heading: Opt A - Sentinel Package (fully catered)
  # optional. text to be shown above price table. Follow the "- text" like on other fields like for example description on lodging
  overview: null
  # optional. Set to null if not to be displayed
  table:
    - pax: 1 Person
      price: R9500/pp
    - pax: 2 Persons
      price: R7100/pp
    - pax: 3 Persons
      price: R6700/pp
    - pax: 4-5 Persons
      price: R6500/pp
    - pax: 6-7 Persons
      price: R6200/pp

  heading2: Opt B - Buttress Package (partially catered)
  overview2: null
  table2:
    - pax: 1 Person
      price: R7700/pp
    - pax: 2 Persons
      price: R5300/pp
    - pax: 3 Persons
      price: R4900/pp
    - pax: 4-5 Persons
      price: R4500/pp
    - pax: 6-7 Persons
      price: R4200/pp
  includes:
    - '<strong>3 Nights Accom</strong> (sharing basis): 1 night at Cavern Hotel (Std Room) & 2 Nights at the Mountain Lodge – nicest Sentinel Chalets'
    - '<strong>All meals:</strong> from dinner on arrival night to packed lunch on the final hike day (3 Breakfasts, 3 Packed Lunches, and 3 Dinners).'
    - '<strong>Hiking Guide</strong> - for first 2 hike days (Day 3 is an easy self-guide down to Royal Natal)'
    - '<strong>Hiking Permit</strong> - for Hike day 2 from Sentinel Car Park'
    - '<strong>Witsies Mountain Lodge - Sentinel Car Park - RTN Transfer</strong>'
    - '<strong>Private Return Transfer:</strong> pick-up from Royal Natal & transfer back to the Cavern on the final day'
  # optional. Follow same format as includes fields
  notIncludes:
    - '<strong>Porter Support</strong>: Budget R870/porter for the 2 days required (up & down the mountain)'
    - '<strong>Royal Natal Permit</strong> (purchased on exit): R40 (SADC residents) / R80 - Internationals'
    - <strong>Bar Tabs & Gratuities</strong>
# use on the tour card if the tour is a popular tour on home page
popularTour:
  # If the tour is to be shown on home page as a popular tour and in what order. If not popular the value must be 0.
  featured: 3
  image: ../../img/listing/img-03-amphi.jpg
  tagline: Aim for the summit
  title: Hike to the Roof of Africa
  description: 'Reach the top of the escarpment and source of the Tugela River, where you can stand atop the second highest waterfall in the world. On our 3 day Amphitheatre hike you’ll overnight in comfy mountain lodges, have your meals catered for, and can have your backpack portered.'
# use on the tour card on destination page.
destinationTour:
  order: 1
  image: ../../img/listing/drak-amphi.jpg
  title: Summit the Escarpment in Style – Amphitheatre, Northern Berg
  description: Hike to the 'Roof of Africa' and source of the Tugela River, where you will stand atop the second highest waterfall in the world. Previously only attainable to experienced mountaineers, we offer a guided slackpacking trail where you can overnight in comfy mountain lodges, have your meals catered for, and backpack portered.
  emailLink: mailto:tours@active-escapes.co.za?subject=Amphitheatre Hike Enquiry - Drak Destination Listing
---
