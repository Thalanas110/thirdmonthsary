/*\
This file includes all the poems.
*/

// Utility function to count stanzas in a poem
function countStanzas(content) {
    // Split by double line breaks (paragraph separators) and filter out empty strings
    return content.trim().split(/\n\s*\n/).filter(stanza => stanza.trim().length > 0).length;
}

export const poems = [
    {
        "id": 1,
        "title": "Binary Heartbeats in Lab Light",
        "author": "Adriaan M. Dimate, BSCS 3-A",
        "content": "When circuits hum and screens glow blue,\nAmidst the practicum's demanding view,\nMy thoughts still wander back to you,\nLike steady code that runs so true.\n\nThrough logic gates and data streams,\nYou flow inside my waking dreams,\nA constant in this tech-bound scene,\nMy human pause in machines' regime.\n\nWhile classmates type with furrowed brow,\nAnd algorithms make them vow,\nI trace your name with wonder now,\nA soft escape I can't disavow.\n\nFor every function that I write,\nYour memory makes the process bright,\nMy debugger in the lonely night,\nMy compiler getting each line right.\n\nWhen sensors fail and prototypes crack,\nAnd missing semicolons set us back,\nYour voice becomes the strength I lack,\nThe perfect code no project lacks.\n\nSo let the servers buzz and whine,\nYour presence makes the chaos fine,\nThis practicum becomes divine,\nBecause through every lab, you're mine.\n\nEven when tasks demand my all,\nYour love stands firm and won't let fall,\nMy anchor through the practicum's call,\nThe sweetest truth beyond this hall.",
        "preview": "When circuits hum and screens glow blue, amidst the practicum's demanding view...",
        "tags": ["practicum", "lab", "technology", "devotion", "academic love"]
    },
    {
        "id": 2,
        "title": "Bridges Between Heartbeats",
        "author": "Adriaan M. Dimate, BSCS 3-A",
        "content": "Though distance stretches like a sea,\nYour presence stays alive in me,\nA constant warmth that won't depart,\nThis steady compass in my heart.\n\nI save your messages like gold,\nRereading stories they unfold,\nEach word a thread that helps me hold\nOur connection, precious to behold.\n\nWhen evening paints the sky in red,\nI picture words you might have said,\nAnd though we're temporarily apart,\nYou're woven through my very heart.\n\nThis separation's but a test\nOf how our loving is expressed\nBeyond the touch, beyond caress,\nIn patient, faithful tenderness.\n\nEach day apart prepares the way\nFor sweeter joy when comes the day\nOur hands will meet, no more delay,\nAnd every mile melts away.\n\nSo let this distance make us grow,\nA deeper bond that we will know,\nFor absence teaches hearts to show\nHow true devotion overflows.\n\nNo ocean wide nor mountain high\nCan break the tether you and I\nHave built beneath the watching sky,\nWhere love's true constants never die.",
        "preview": "Though distance stretches like a sea, your presence stays alive in me...",
        "tags": ["longing", "distance", "connection", "devotion", "reunion"]
    },
    {
        "id": 3,
        "title": "Imperfect Perfection",
        "author": "Adriaan M. Dimate, BSCS 3-A",
        "content": "I love the storm within your eyes,\nThe hurricane that makes me wise,\nThe lightning flaws some criticize,\nTo me are treasure in disguise.\n\nWhen thunder rolls inside your voice,\nAnd tempests seem your only choice,\nI find in turbulence rejoice,\nFor chaos makes the heart find poise.\n\nYour cracks are where the light gets in,\nYour broken edges let me begin,\nTo trace the beauty underneath your skin,\nWhere all our perfect wars are win.\n\nLet others seek some flawless face,\nSome untroubled, easy grace,\nI choose your complicated space,\nWhere love sets its own time and place.\n\nThrough shifting moods and changing weather,\nWe tether heart to tether,\nTwo flawed souls bound together,\nMaking \"always\" mean forever.\n\nSo bring the shadows, bring the night,\nYour darkness makes my colors bright,\nIn your imperfect, fractured light,\nMy love finds its eternal sight.\n\nFor every jagged edge you own,\nMy love has firmly grown,\nA garden where true love is sown,\nIn soil that we've both known.",
        "preview": "I love the storm within your eyes, the hurricane that makes me wise...",
        "tags": ["unconditional", "flaws", "acceptance", "imperfection", "eternal love"]
    },
    {
        "id": 4,
        "title": "Mooniversary",
        "author": "Adriaan M. Dimate, BSCS 3-A",
        "content": "Another lunar cycle turns,\nAnother candle brightly burns,\nFor all the love this month confirms,\nAnother chapter our heart learns.\n\nWe've weathered thirty sunsets now,\nWith whispered promises and vow,\nTo make this timeless work somehow,\nWith furrowed brow and softened brow.\n\nRemember when the rain fell hard?\nThat Tuesday evening in the yard,\nWhen everything seemed battle-scarred,\nBut love became our bodyguard.\n\nAnd Thursday's unexpected sun,\nThat caught our laughter on the run,\nTwo hearts becoming more than one,\nA victory we'd gladly won.\n\nThese tiny moments, stacked like gold,\nAre stories waiting to be told,\nMore precious as the years unfold,\nOur personal legends to uphold.\n\nSo raise your glass of starlight wine,\nThis anniversary is thine and mine,\nAnother month to intertwine,\nYour heartbeat synchronizing mine.\n\nLet constellations mark our time,\nIn cosmic rhythm, sublime,\nThis love of ours will never rhyme,\nWith endings - only with beginnings chime.",
        "preview": "Another lunar cycle turns, another candle brightly burns...",
        "tags": ["anniversary", "celebration", "monthly", "milestone", "enduring love"]
    },
    {
        "id": 5,
        "title": "Absent Pages",
        "author": "Adriaan M. Dimate, BSCS 3-A",
        "content": "Last semester's frantic race,\nLeft little time for your embrace,\nYet through the academic space,\nYou were my saving grace.\n\nWhen textbooks piled tall and deep,\nAnd deadlines stole away our sleep,\nYour understanding I would keep,\nA promise I will always reap.\n\nI saved your messages with care,\nEach one a breath of loving air,\nReminding me beyond compare,\nThat you were always there.\n\nNow as new chapters we begin,\nI'll weave you through each page within,\nMy constant against the academic din,\nThe love that helps me win.\n\nNo more the ghost who comes and goes,\nBut one who deliberately chose,\nTo make our garden bloom and grow,\nWhere love's true syllabus still shows.\n\nFor every future busy night,\nYou'll be my guiding, steady light,\nMy balance and my true birthright,\nMaking everything feel right.\n\nThis semester I reclaim the time,\nTo make our loving rhythm rhyme,\nYour presence in my life's paradigm,\nThe greatest gift, completely mine.",
        "preview": "Last semester's frantic race, left little time for your embrace...",
        "tags": ["apology", "academia", "busy", "gratitude", "reconnection"]
    },
    {
        "id": 6,
        "title": "Shared Syllabus",
        "author": "Adriaan M. Dimate, BSCS 3-A",
        "content": "New textbooks open, fresh and clean,\nWith you beside me, this new scene\nOf academic rigor, sharp and keen,\nFeels like a shared, familiar dream.\n\nWe walk these halls with matching stride,\nNo need to run, no need to hide\nOur loving glances, side by side,\nThrough lectures where our minds collide.\n\nWhen complex theories make me strain,\nYour patient smile relieves the pain,\nLike gentle academic rain\nThat makes new understanding gain.\n\nIn study sessions, late and deep,\nWhile other students fight for sleep,\nOur quiet promises we keep,\nVows that our hearts will always reap.\n\nThis semester's challenges we'll face,\nWith you, my academic grace,\nMy constant in this learning space,\nMy home in every classroom place.\n\nThrough exams that test and projects due,\nI'll always find my way to you,\nThe truest lesson, pure and true,\nThat love makes all things bright and new.\n\nSo let the academic year unfold,\nOur story constantly retold,\nMore precious than academic gold,\nThis love we carefully hold.",
        "preview": "New textbooks open, fresh and clean, with you beside me, this new scene...",
        "tags": ["academic", "new semester", "together", "learning", "partnership"]
    },
    {
        "id": 7,
        "title": "Rollercoaster Hands",
        "author": "Adriaan M. Dimate, BSCS 3-A",
        "content": "Our journey isn't flat terrain,\nBut hills and valleys, sun and rain,\nYet through the pleasure, through the pain,\nOur loving bond will still remain.\n\nWhen disagreements make us fray,\nAnd angry words get in the way,\nWe pause and breathe, we don't stray,\nWe find the dawn after the gray.\n\nFor every tear that you have shed,\nI'll kiss them from your eyes instead,\nAnd plant sweet promises in their stead,\nUntil the storm clouds all have fled.\n\nThe highs we reach when joy takes flight,\nThat giddy, breathless, sunlit height,\nWe store away like pure starlight,\nFor darker moments in the night.\n\nThis rollercoaster we both ride,\nWith you secured here at my side,\nMakes every dip and turn and slide\nA journey filled with loving pride.\n\nNo temporary turbulence\nCan break our loving confidence,\nFor we have built a strong defense\nOf trust and mutual recompense.\n\nSo bring the challenges ahead,\nWith hands and hearts and words well-said,\nWe'll navigate where we are led,\nWith love as compass, widely spread.",
        "preview": "Our journey isn't flat terrain, but hills and valleys, sun and rain...",
        "tags": ["challenges", "commitment", "resilience", "partnership", "growth"]
    },
    {
        "id": 8,
        "title": "Facial Cartography",
        "author": "Adriaan M. Dimate, BSCS 3-A",
        "content": "I've mapped the landscape of your face,\nEach contour, curve, and sacred space,\nA territory I embrace,\nMy heart's most holy resting place.\n\nThe arching brows that speak your mind,\nThe eyelash shadows, soft and kind,\nThe smile lines I've come to find\nAre where my happiness is signed.\n\nThat tiny mole beside your nose,\nA landmark that my loving knows,\nA beauty mark that brightly glows\nIn memory when my eyes close.\n\nThe lips that form my favorite words,\nWhose gentle curves, like singing birds,\nRelease the sweetest truths ever heard,\nThat heal all wounds and calm all hurts.\n\nYour cheekbones catch the morning light,\nA dawn that makes my world feel right,\nA canvas endlessly bright,\nThat fills my soul with pure delight.\n\nEven when you're deep in thought,\nEach micro-expression I've been taught,\nA language I have dearly bought,\nWith all the loving I have brought.\n\nThis face I'll never tire to trace,\nMy favorite view in any place,\nThe living map of saving grace,\nThat time nor age can e'er erase.",
        "preview": "I've mapped the landscape of your face, each contour, curve, and sacred space...",
        "tags": ["admiration", "beauty", "facial features", "devotion", "observation"]
    },
    {
        "id": 9,
        "title": "Sanctuary Steps",
        "author": "Adriaan M. Dimate, BSCS 3-A",
        "content": "Before the altar, hand in hand,\nWe take our solemn, sacred stand,\nAs witnesses on every side\nSee love they cannot hope to hide.\n\nThe candles flicker soft and low,\nCasting gentle, golden glow,\nOn promises we've come to show\nAre seeds we've nurtured long to grow.\n\nYour eyes reflect the sacred light,\nSo beautiful, my heart takes flight,\nAs we approach love's greatest height,\nBathed in divine and purest white.\n\nThe vows we speak with steady voice,\nA conscious, everlasting choice,\nMake every doubting thought rejoice,\nAnd silenced fears lose all their voice.\n\nThis holy space where heaven meets\nThe earthly rhythm of heartbeats,\nWhere two separate journeys complete\nTheir transformation, bittersweet.\n\nWith every \"I do\" clearly said,\nA future pathway lies ahead,\nWhere daily manna will be fed\nTo love by which we both are led.\n\nNo grander moment could there be,\nThan standing here, just you and me,\nBefore all time and history,\nBound for eternity.",
        "preview": "Before the altar, hand in hand, we take our solemn, sacred stand...",
        "tags": ["wedding", "altar", "commitment", "sacred", "eternity"]
    },
    {
        "id": 10,
        "title": "Nourishment Sonnets",
        "author": "Adriaan M. Dimate, BSCS 3-A",
        "content": "For nine months straight, my daily quest,\nTo see your hunger put to rest,\nTo feed the woman I love best,\nBecame my joy, my constant test.\n\nI learned the recipes you crave,\nThe flavors that your palate save,\nEach meal a promise that I gave,\nTo nurture what the future gave.\n\nFrom breakfasts cooked at dawn's first light,\nTo midnight snacks in quiet night,\nI'd find such deep and pure delight\nIn making every bite feel right.\n\nThe kitchen smells became our song,\nWhere I belonged, where I felt strong,\nPreparing food all morning long,\nTo make our family bond grow strong.\n\nEach satisfied and contented sigh,\nThat passed your lips caught my eye,\nMore precious than a starry sky,\nA private joy no coin could buy.\n\nThis service done with loving hand,\nWas never work, but something grand,\nA testament to what we've planned,\nThe greatest gift life could demand.\n\nSo let me feed you still today,\nIn this most ordinary way,\nMy culinary love display,\nThat says what words cannot convey.",
        "preview": "For nine months straight, my daily quest, to see your hunger put to rest...",
        "tags": ["nurturing", "pregnancy", "care", "culinary", "devotion"]
    },
    {
        "id": 11,
        "title": "Divine Fabric: You in Every Attire",
        "author": "Adriaan M. Dimate, BSCS 3-A",
        "content": "Whether in soft white bridal gown,\nOr starched uniform with buttons down,\nYour beauty needs no earthly crown,\nTranscending every fabric's renown.\n\nIn wedding dress like clouded skies,\nYou stand celestial in my eyes,\nIn duty's uniform that implies\nService, you still mesmerize.\n\nYour eyes reflect eternal light\nThrough darkest watches of the night,\nYour smile makes any burden light,\nA beacon ever clear and bright.\n\nWhen barefoot at the altar you stand,\nOr rush to class with books in hand,\nMy joy remains forever grand,\nYou're loveliest in any land.\n\nYour essence far exceeds the cloth,\nMore beautiful than patterns wrought,\nIn white or uniform you've brought\nHeaven's masterpiece to earth, I've thought.\n\nFor garments merely frame the art\nThat God designed within my heart,\nThe truest, most essential part\nThat sets your beauty far apart.",
        "preview": "Whether in soft white bridal gown, or starched uniform with buttons down...",
        "tags": ["beauty", "wedding dress", "uniform", "divine", "admiration"]
    },
    {
        "id": 12,
        "title": "Binary Bond: Our Thesis Journey",
        "author": "Adriaan M. Dimate, BSCS 3-A",
        "content": "Through coffee-fueled and endless nights,\nWhere coded streams like rivers flow,\nYou stood beside me in the fights,\nDebugging errors row by row.\n\nYour hands that dance across the keys,\nYour mind - a supercomputer's grace,\nHelped navigate complexities,\nThrough algorithms we would trace.\n\nWhen deadlines loomed like stormclouds grey,\nYou were my shelter from the rain,\nWhen data mazes led astray,\nYour insight lit the path again.\n\nIn compiling each research page,\nBuilding bibliographies so vast,\nYour spirit eased the scholar's rage,\nMade weary moments blessings last.\n\nOur eyes would meet across the screen,\nOur fingers synchronized in flight,\nOur thoughts converged in rhythms keen,\nCreating knowledge in the night.\n\nThis shared endeavor, tough and long,\nForged something stronger than the work,\nProved where two trusting souls belong,\nThrough every academic quirk.\n\nWhen presentation day was done,\nThe greatest prize we came to hold\nWasn't the accolades we'd won,\nBut our united story told.",
        "preview": "Through coffee-fueled and endless nights, where coded streams like rivers flow...",
        "tags": ["thesis", "partnership", "academic", "struggle", "victory"]
    },
    {
        "id": 13,
        "title": "Heaven's Handwritten Letter",
        "author": "Adriaan M. Dimate, BSCS 3-A",
        "content": "In midnight prayers when I confessed\nMy longing to the stars above,\nI never dreamed God's kind behest\nWould send me you, His perfect love.\n\nWhen starlight dances in your gaze,\nI see the Artist's gentle touch,\nWhen I hear your voice through daily haze,\nAngelic harmonies mean this much.\n\nThrough every shared and simple day,\nThrough every ordinary hour,\nGod's grace illuminates the way\nThrough you - my life's most sacred flower.\n\nYour kindness that knows no constraint,\nYour mercy flowing like a spring,\nYour faith that makes the weakest saint\nRemember why we praise and sing.\n\nThis priceless treasure, heaven-sent,\nEntrusted to my humble care,\nIs living proof, a sacrament,\nThat God designed our love affair.\n\nIn love's strong covenant I see\nDivine appointments clearly shown,\nYour very soul reveals to me\nThat I am never, ever alone.",
        "preview": "In midnight prayers when I confessed, my longing to the stars above...",
        "tags": ["divine", "destiny", "gratitude", "providence", "soulmate"]
    },
    {
        "id": 14,
        "title": "Trinity's Embrace",
        "author": "Adriaan M. Dimate, BSCS 3-A",
        "content": "In sanctuary light we stand,\nOur clasped hands lifted high in prayer,\nNot just two hearts, but threefold band,\nWith God Himself attending there.\n\nThrough stained-glass windows casting hues,\nIn sacred images we view,\nThe Father, Spirit, Son infuse\nOur union, making all things new.\n\nWhen we approach the mercy seat,\nOur mutual faith begins to bloom,\nThis love we share becomes complete\nWhen nourished in that holy room.\n\nIn scripture reading, side by side,\nIn hymns of praise we lift as one,\nThe Spirit joins us in this tide,\nOur harmony with heaven spun.\n\nWhen trials come like crashing waves,\nOur faith becomes a steadfast boat,\nNo tempest our foundation braves,\nFor God Himself keeps us afloat.\n\nAs someday husband and as wife,\nOur family tree will firmly root\nIn spiritual and abundant life,\nWith God as our eternal shoot.\n\nFor every choice we make below,\nWe'll seek His guidance from above,\nThis sacred triangle will grow\nOur threefold cord of endless love.",
        "preview": "In sanctuary light we stand, our clasped hands lifted high in prayer...",
        "tags": ["faith", "worship", "trinity", "spiritual", "covenant"]
    },
    {
        "id": 15,
        "title": "Threshold of Belonging",
        "author": "Adriaan M. Dimate, BSCS 3-A",
        "content": "I often picture in my mind\nThe day I'll bring you home to see\nThe walls where childhood's etched designs\nAnd stairways hold what shaped me.\n\nI long for when my parents say,\n\"So this is she\" with knowing eyes,\nThe woman who lights up my way,\nWho makes their son feel truly wise.\n\nI'll watch your sparkling gaze explore\nThe photos of my younger years,\nYour laughter ringing through the door\nAs family stories reach your ears.\n\nMy father's hand will welcome you,\nHis silent \"Thank you for our boy,\"\nMy mother's finest dishes brew\nWith secret recipes of joy.\n\nUpon our old home's wooden stair,\nOur feet will tread the selfsame space\nWhere I first learned to dream and dare,\nNow starting our own dwelling place.\n\nThis introduction's sacred rite\nMeans more than simple family claim,\nIt's showing them my guiding light,\nThe answer to my whispered name.\n\nFor in this threshold we'll begin\nThe merging of our separate pasts,\nWhere roots and futures intertwine,\nA family tree that ever lasts.",
        "preview": "I often picture in my mind, the day I'll bring you home to see...",
        "tags": ["family", "parents", "tradition", "commitment", "belonging"]
    },
    {
        "id": 16,
        "title": "Syntax of Devotion",
        "author": "Adriaan M. Dimate, BSCS 3-A",
        "content": "Each keystroke forms a loving trace,\nWhile algorithms find their place,\nBut every function I create,\nBears only thoughts of you, my fate.\n\nMy variables all speak your name,\nThe loops repeat our passion's flame,\nConditionals that branch and flow,\nReflect the love I've come to know.\n\nWhen curly braces hug the lines,\nI feel your arms around these signs,\nThe semicolons that complete,\nAre kisses tender, bittersweet.\n\nMy debugger scans for flaws unseen,\nLike trust we build to keep us clean,\nThe run-time errors that appear,\nAre doubts we banish, never fear.\n\nIn object-oriented design,\nYour class inherits traits divine,\nEncapsulated in my core,\nA love that ever will endure.\n\nThe compiler translates my heart,\nTo bytecode where you play your part,\nMachine language, cold and deep,\nWarms where your memory I keep.\n\nWhite spaces aren't what they appear,\nBut pauses when I wish you near,\nIndentations that structure code,\nMark pathways on our loving road.\n\nWhen APIs connect outside,\nI feel you standing by my side,\nExternal libraries I employ,\nLike borrowed joys you bring, my joy.\n\nThe terminal's stark, monochrome view,\nTransforms when I imagine you,\nCommand line prompts that blink and wait,\nBecome our future, sealed by fate.\n\nGit commits chronicle each change,\nThrough versions we'll forever range,\nNo conflicts that we can't resolve,\nWith loving patience we'll evolve.\n\nThis programming becomes holy rite,\nEach syntax rule burning bright,\nFor every line of code I write,\nIs prayer to you, my soul's delight.\n\nSo let me build with sacred art,\nThis digital world, counterpart,\nTo flesh-and-blood reality,\nWhere all my code belongs to thee.",
        "preview": "Each keystroke forms a loving trace, while algorithms find their place...",
        "tags": ["programming", "devotion", "technology", "metaphor", "creation"]
    },
    {
        "id": 17,
        "title": "Circle of Forever",
        "author": "Adriaan M. Dimate, BSCS 3-A",
        "content": "This band of gold, this perfect round,\nWhere ending never can be found,\nA silent vow to all the earth,\nOf love that predates human birth.\n\nNo diamond flash could hope to show,\nThe brilliant light that from you flows,\nThe platinum setting, strong and pure,\nLike our commitment, will endure.\n\nWhen sunlight catches in its face,\nI see our future in that space,\nRefracted into rainbow hues,\nOf all the paths we'll get to choose.\n\nIt rests now where your pulse resides,\nAgainst the skin where truth abides,\nA constant weight, a gentle press,\nSealing our sacred togetherness.\n\nThe artisan who shaped this ring,\nCould never grasp the song we sing,\nThe harmony no jeweler hears,\nForged in our joy, our pain, our tears.\n\nNo proclamation need be made,\nThis silent symbol stands displayed,\nA covenant that speaks more clear,\nThan any shouted 'yes, my dear.'\n\nWhen others see its gleaming curve,\nLet them observe and then observe,\nThat perfect circles have no end,\nOn this eternal truth depend.\n\nThrough decades when the metal wears,\nAnd life presents its constant cares,\nThis modest hoop will still declare,\nWhat we have pledged beyond compare.\n\nWhen fingers age and joints grow frail,\nThis ring will tell our timeless tale,\nHow youth's bright passion transformed deep,\nTo promises that death won't keep.\n\nFor when we pass to other spheres,\nBeyond this mortal veil of tears,\nThis symbol of our earthly vow,\nWill grace eternity somehow.\n\nSo wear it not as binding chain,\nBut proof of sun beyond the rain,\nThe visible, incarnate sign,\nThat forever, you are mine.\n\nThis circle closes round our fate,\nTwo souls made one, beyond debate,\nThe final punctuation mark,\nOn love's most sacred, shining arc.",
        "preview": "This band of gold, this perfect round, where ending never can be found...",
        "tags": ["engagement", "eternity", "symbolism", "commitment", "ring"]
    },
    {
        "id": 18,
        "title": "Cartography of Connection",
        "author": "Adriaan M. Dimate, BSCS 3-A",
        "content": "Though oceans stretch their liquid miles,\nAnd continents delay our smiles,\nYour presence lives inside my breath,\nDefying space, defying death.\n\nThe longitude that lies between,\nBecomes a thread where love is seen,\nConnecting heart to beating heart,\nThough physical worlds stand apart.\n\nWhen timezones steal our waking hours,\nAnd distance mocks love's fragile powers,\nI close my eyes and feel you near,\nYour essence banishes all fear.\n\nThe pillow where your head should rest,\nStill holds impressions from your nest,\nEach wrinkle in the cotton weave,\nA memory I won't bereave.\n\nWe build our world in digital space,\nWhere pixels form your loving face,\nThough screens can't replicate your touch,\nThey bridge the gap, they mean so much.\n\nThe moon we both observe at night,\nBecomes our shared celestial light,\nIts craters tell our secret tales,\nIts phases chart what love entails.\n\nWhen rain against my window drums,\nI know your distant weather comes,\nTo wash me with your atmosphere,\nAnd whisper that you're always here.\n\nOur bookshelf holds the same dog-eared page,\nOur music plays across the age,\nThese synchronies become our proof,\nAgainst geography's aloof.\n\nI study maps not for their lines,\nBut where your spirit intertwines,\nWith landscapes that I traverse now,\nYour love directs me anyhow.\n\nNo separation truly parts,\nTwo souls who've synchronized their hearts,\nFor presence isn't flesh alone,\nBut where the heart has built its home.\n\nSo let the airlines schedule flights,\nWhile we transcend these earthly plights,\nOur intimacy needs no plane,\nWhen hearts have forged eternal chain.\n\nThis distance merely trains the soul,\nTo see the love that makes us whole,\nA closeness no eye can perceive,\nBut every fiber will believe.",
        "preview": "Though oceans stretch their liquid miles, and continents delay our smiles...",
        "tags": ["long-distance", "connection", "transcendence", "absence", "presence"]
    },
    {
        "id": 19,
        "title": "Lunar Confessions",
        "author": "Adriaan M. Dimate, BSCS 3-A",
        "content": "The moon tonight wears silver gown,\nAnd casts her light upon the town,\nBut where we sit in shadows deep,\nHer secrets she will let us keep.\n\nHer craters form a face that smiles,\nUpon our tender, moonlit wiles,\nAs if she knows what lovers do,\nBeneath her gentle, watchful hue.\n\nThe stars around her pale and fade,\nContent to be the frame she's made,\nJust as the world recedes from view,\nWhen I am here alone with you.\n\nYour eyes reflect that pearly light,\nTransforming darkness into sight,\nWhere lunar oceans seem to flow,\nIn depths only the lovers know.\n\nWe speak in hushed, cathedral tones,\nAs moonlight etches sacred zones,\nAround our interwoven hands,\nBlessing what love understands.\n\nThe night breeze carries whispered vows,\nThat daylight never would allow,\nConfessions floating on the air,\nThat only moonshine can declare.\n\nYour silhouette against her glow,\nBecomes a statue I well know,\nCarved by celestial artist's grace,\nPerfection time won't erase.\n\nWe trace the constellations high,\nAnd map our future in the sky,\nConnecting dots to form our fate,\nWhile night birds sing it's not too late.\n\nThe phases that the moon displays,\nReflect our own evolving ways,\nFrom crescent hope to full-orbed light,\nThrough every dark and shining night.\n\nNo sunlight's harsh, revealing stare,\nCompares to how this moon lays bare,\nThe truths we hide from common day,\nThat silver beams unveil and say.\n\nSo let the dawn delay its birth,\nLet moonlight blanket all the earth,\nWhile in this glow we find our truth,\nBeyond the boundaries of youth.\n\nFor when this lunar vigil ends,\nAnd morning light around us bends,\nOur moonlit promises will stay,\nGuiding us through brightest day.",
        "preview": "The moon tonight wears silver gown, and casts her light upon the town...",
        "tags": ["moonlight", "intimacy", "secrets", "romance", "night"]
    },
    {
        "id": 20,
        "title": "Deed of Flesh and Spirit",
        "author": "Adriaan M. Dimate, BSCS 3-A",
        "content": "From crown of head to soles of feet,\nNo inch remains my own retreat,\nBut bears your seal, your ownership,\nSurrendered in love's partnership.\n\nThese temples where my thoughts reside,\nNow open doors for you inside,\nWhere all my mental landscapes flow,\nAre territories that you know.\n\nThe hands that type these humble lines,\nHave signed themselves to your designs,\nTheir strength, their skill, their very nerve,\nTo your command alone will serve.\n\nThe eyes that scan the world around,\nSee only where your grace is found,\nTheir lenses focused just on you,\nPerceiving all things fresh and new.\n\nMy ears attend to every sound,\nBut only when your voice resounds,\nDo melodies transform the air,\nInto a symphony beyond compare.\n\nThese lips that form both speech and prayer,\nDeclare you sovereign everywhere,\nTheir curves remember your sweet kiss,\nTheir very breath your name won't miss.\n\nThe shoulders meant to bear life's weight,\nFind purpose at your chosen gate,\nTo shield you from the storm and stress,\nProviding comfort and caress.\n\nThe heart that pumps this crimson flow,\nBeats rhythms only you can know,\nIts chambers echo with your name,\nEach systole a loving claim.\n\nMy spine, the pillar of my frame,\nNow bears the honor of your name,\nIts vertebrae like sacred beads,\nCounting the ways your spirit leads.\n\nThese legs that walk through daily strife,\nMarch only toward your shared life,\nTheir muscles flex, their tendons strain,\nTo reach your presence once again.\n\nEach cell contains your signature,\nWritten at subatomic level,\nA covenant that will endure,\nBeyond death's dark and cryptic revel.\n\nSo take this flesh, imperfect form,\nThrough every calm and through each storm,\nFor I am yours beyond recall,\nBody and spirit, surrendering all.",
        "preview": "From crown of head to soles of feet, no inch remains my own retreat...",
        "tags": ["surrender", "devotion", "physicality", "possession", "wholeness"]
    }

];

// Add stanza counts to all poems
poems.forEach(poem => {
    poem.stanzas = countStanzas(poem.content);
});
