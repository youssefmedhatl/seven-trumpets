import type { DialogueLine } from "./trumpets/types";

/**
 * SEVEN TRUMPETS — VERBATIM SCRIPT (already recorded for voice-over).
 *
 * Transcribed word-for-word from the approved script document
 * ("السبع أبواق - النص الكامل للمسرحية / السكريبت", مدرسة الكتاب المقدس).
 * The Arabic text is split into shorter dialogue turns for on-screen
 * pacing, but every turn's Arabic text is copied verbatim from the
 * source script — nothing has been reworded, shortened, or paraphrased,
 * so it stays in sync with the recorded narration. English lines are a
 * plain-meaning translation for non-Arabic readers only; they are not
 * used for audio.
 *
 * Speakers (3 portraits, reused across the whole piece):
 *  - "narrator" → الراوي (the Narrator) — opening monologue, and every third-person
 *                 stage-direction / narration line throughout the script
 *  - "girl"    → الشخصية الرئيسية (the Main Character / protagonist)
 *  - "angel"   → the Angel guarding each of the seven doors — same portrait,
 *                a distinct on-screen name per door via `speakerLabel`.
 *
 * The verified Coptic Orthodox / Coptic Reader Scripture passage for each
 * trumpet is shown separately by ScripturePanel — quoted verses that
 * appear inline in the script are lifted out into `scriptureText` in the
 * matching trumpetN.ts file instead of being repeated here.
 */

export interface TrumpetScript {
  intro: DialogueLine[];
  closing: DialogueLine[];
}

const angelLabel = (ar: string, en: string) => ({ ar, en });

export const openingScript: DialogueLine[] = [
  {
    // Merged: one continuous recording (opening-narrator.wav) covers the
    // whole opening monologue, so it's shown as a single turn in sync with it.
    speaker: "narrator",
    audioSrc: ["/audio/doors/opening-narrator.wav"],
    text: {
      ar:
        "كل اللي هتشوفه او هتسمعه هنا مرتبط بحدث واحد , حدث لسة مبدأش بس مكتوب من زمن بعيد جدا , " +
        "هتسمع اصوات وهتشوف علامات , اظن انك عارف ان عندنا سبع ابواق بس اللي متعرفوش ان محدش هيفهم البوق الاول , " +
        "غير اللي فهم البوق الاول , ومطلوب التركيز لان في كلمات بعد ما تسمعها وتفهمها مش هترجع زي ما كانت قبل ما تسمعها ! " +
        "حافظ علي نفسك لان مفيش اكتر من العوائق, اللي لو وقعت فواحد منها حياتك هتنتهي ! " +
        "اشوفك في النهاية يا بطل...... " +
        "يختفي الراوي وتظهر سبع ابواب عملاقة ورا كل باب هيبقى في ملاك يحكي قصة البوق وبعد ما يحكي ويخلص هيدي الشخصية الاساسية مفتاح الباب اللي بعدو , " +
        "ويحذروا من تنفيذ التحذير اللي اتحكاله والا هيسمع صوت البوق ودي هتبقى علامة خطيرة " +
        "البوابة الاولى :",
      en:
        "Everything you're about to see or hear here is tied to one event — an event that hasn't begun yet, but was written long, long ago, " +
        "you'll hear voices and see signs. I think you already know we have seven trumpets — but what you don't know is that no one truly understands the first trumpet, " +
        "except the one who has understood the first trumpet. Stay focused — there are words that, once you hear and understand them, you can never go back to who you were before hearing them! " +
        "Guard yourself — there is nothing but obstacles ahead, and if you fall into even one of them, your life will end! " +
        "See you at the end, hero...... " +
        "The Narrator vanishes, and seven giant doors appear. Behind each door stands an angel who will tell the story of that trumpet — and once he finishes, he hands the main character the key to the next door, " +
        "warning her not to ignore what she's been told — or she will hear the sound of the trumpet, which will be a dangerous sign. " +
        "The First Gate:",
    },
  },
];

// ---------------------------------------------------------------------
// Door 1 — الملاك الأول
// ---------------------------------------------------------------------
const trumpet1: TrumpetScript = {
  intro: [
    {
      // Merged: one continuous recording (door1-angel.wav) covers this
      // whole speech, so it plays as a single turn in sync with the clip.
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الأول", "The First Angel"),
      cue: "watch",
      audioSrc: ["/audio/doors/door1-angel.wav"],
      text: {
        ar:
          "بوقي مش بيجي منغير اثر, اللي كان اخضر اتحرق, حاجتين ميتجمعوش اتحلوا مع بعض لهجوم قاسي, " +
          "هشرح واحدة واحدة واهم حاجة متستعجلش...............عشان متخسرش كل حاجة ! " +
          "الحاجتين هما النار و البرد البرد هو بخار المتجمد تجمع علي شكل كورات تلج ويبشير لقوة التأديب, " +
          "اما النار فهي اشارة لشدة غضب الله , البرد والنار كونا الهجوم القاسي اللي اول ما هيضرب الارض تلت الاشجار وكل عشب الارض هيتحرقوا, " +
          "والهدف من التأديب ده إذلال المتكبرين علشان تتحقق نبوة اشعياء " +
          '" فإن لرب الجنود يوما علي كل متعظم وعال , وعلي كل مرتفع فيوضع , وعلي كل ارز لبنان العالي المرتفع ,وعلي كل بلوط باشان" ' +
          "اظن انت جاهز تاخد مفتاح الباب التاني دلوقتي , خد بالك من اللي جاي",
        en:
          "My trumpet never comes without a trace — what was green is burned. Two things that don't normally mix came together for a harsh attack, " +
          "I'll explain them one by one — and most importantly, don't rush............... or you'll lose everything! " +
          "The two things are fire and hail. Hail is frozen vapor gathered into balls of ice, a sign of the power of discipline, " +
          "while fire is a sign of the intensity of God's anger. Together, hail and fire form the harsh attack — the moment it strikes the earth, a third of the trees and all the earth's grass will burn, " +
          "and the purpose of this discipline is to humble the arrogant, so that Isaiah's prophecy comes true: " +
          '"For the LORD of hosts has a day against everyone who is proud and lofty, against everyone who is lifted up — and it shall be brought low; against all the cedars of Lebanon, and against all the oaks of Bashan." ' +
          "I think you're ready to take the key to the second door now. Watch yourself with what's coming.",
      },
    },
  ],
  closing: [],
};

// ---------------------------------------------------------------------
// Door 2 — الملاك الثاني
// ---------------------------------------------------------------------
const trumpet2: TrumpetScript = {
  intro: [
    {
      speaker: "narrator",
      text: {
        ar: "تطلع الشخصية من الباب الاول ويدخل الباب التاني",
        en: "The character exits the first door and enters the second door.",
      },
    },
    {
      // Merged: door2-angel-part1.wav covers this pair, up to where the
      // girl interrupts.
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الثاني", "The Second Angel"),
      audioSrc: ["/audio/doors/door2-angel-part1.wav"],
      text: {
        ar:
          "البوق ده مش جاي بنار من الارض زي البوق الاول,شئ عظيم مولع بالنار اتدمر ووقع في البحر وأخل بالبحر وبكل حاجة فيه , " +
          "تقدر هنا تتكلم وتسأل عشان تعرف كل معلومة تقدر تساعدك في الطريق",
        en:
          "This trumpet doesn't bring fire from the earth like the first trumpet — something great, burning with fire, was destroyed and fell into the sea, disturbing the sea and everything in it, " +
          "you're free to speak and ask here, so you can learn anything that might help you along the way.",
      },
    },
    {
      speaker: "girl",
      text: {
        ar: "اعتقد لو حاجة عظيمة في الحجم علي الارض مش هيكون في انسب من الجبال, صح؟",
        en: "I think if something is great in size on the earth, nothing would fit better than a mountain, right?",
      },
    },
    {
      // Merged: door2-angel-part2.wav picks up from here to the end of the door.
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الثاني", "The Second Angel"),
      cue: "watch",
      audioSrc: ["/audio/doors/door2-angel-part2.wav"],
      text: {
        ar:
          "حقيقي ابهرتني , شكلك شخصية ذكية , " +
          "هو فعلا جبل متقد بالنار و بتشير لقائد عسكري دموي هيعمل حرب في العالم وهيقتل تلت العالم " +
          "والبحر بيشير للنفوس المضطربة وربنا سمح بالجبل ده انه ينزل فوسط المضطربين ويقتل تلتهم بس عشان يسيب فرصة للباقي يتوبوا ويرجعوله , " +
          "عجبتني بذكائك ركز علي نفسك , اللي من صعب تحمله !",
        en:
          "You really impressed me — you seem like a smart one, " +
          "it really is a mountain burning with fire, pointing to a bloodthirsty military leader who will wage war on the world and kill a third of it, " +
          "and the sea points to troubled souls. God allowed this mountain to fall among the troubled and kill a third of them, only so the rest would have a chance to repent and return to Him, " +
          "I like how sharp you are — focus, keep hold of yourself, what's coming is hard to bear!",
      },
    },
  ],
  closing: [],
};

// ---------------------------------------------------------------------
// Door 3 — الملاك الثالث
// ---------------------------------------------------------------------
const trumpet3: TrumpetScript = {
  intro: [
    {
      speaker: "narrator",
      text: {
        ar: "يخرج من الباب التاني ويدخل الباب التالت ولا يجد احد ويبد بالنداء",
        en: "She leaves the second door and enters the third — finding no one there, she begins to call out.",
      },
    },
    { speaker: "girl", text: { ar: "في حد هنا ؟", en: "Is anyone here?" } },
    {
      // door3-angel-part1.wav
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الثالث", "The Third Angel"),
      audioSrc: ["/audio/doors/door3-angel-part1.wav"],
      text: { ar: "انت مين ؟ وقدرت تدخل بابي ازاي؟", en: "Who are you? And how did you manage to get through my door?" },
    },
    {
      speaker: "girl",
      text: {
        ar: "انا حد عدي من البرد والنار والجيل المتقد",
        en: "I'm someone who made it past the hail, the fire, and the burning mountain.",
      },
    },
    {
      // door3-angel-part2.wav
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الثالث", "The Third Angel"),
      audioSrc: ["/audio/doors/door3-angel-part2.wav"],
      text: {
        ar: "واضح انك ذكي عشان تعدي دول , بس كل دول مش زي دول بوقي مضئ اسمه الافسنتين, لوث المياه وموت ناس كتير اوي",
        en: "Clearly you're clever to have gotten past those — but none of that compares to this. My trumpet has a burning star called Wormwood, which pollutes the waters and kills a great many people.",
      },
    },
    {
      speaker: "girl",
      text: { ar: "مش الافسنتين ده نبات مر ؟", en: "Isn't Wormwood a bitter plant?" },
    },
    {
      // door3-angel-part3.wav
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الثالث", "The Third Angel"),
      cue: "watch",
      audioSrc: ["/audio/doors/door3-angel-part3.wav"],
      text: {
        ar: "واضح انك ذكي فعلا , اه الافسنتين نبات مر , بس عشان نفهم ايه المقصود بيه محتاجين نقرأ رؤيا 8 عدد 10 و11",
        en: "You really are clever — yes, Wormwood is a bitter plant. But to understand what's meant by it, we need to read Revelation chapter 8, verses 10 and 11.",
      },
    },
  ],
  closing: [
    {
      // Merged: door3-angel-part4.wav covers this pair.
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الثالث", "The Third Angel"),
      audioSrc: ["/audio/doors/door3-angel-part4.wav"],
      text: {
        ar:
          "وقوع الكوكب ده اشارة للتأديب المر والكوكب نفسه اشارة لشخصيات دينية كتير هيسقطوا ويحاولوا يفسدوا التعليم زي أريوس ونسطور فهيسمموا الانهار ويمرروها وهتموت ناس كتير اوي , " +
          "اي حاجة تاني محتاج تعرفها؟",
        en:
          "This star falling is a sign of bitter discipline, and the star itself points to many religious figures who will fall and try to corrupt the teaching — like Arius and Nestorius — poisoning the rivers and making them bitter, and a great many people will die, " +
          "Anything else you need to know?",
      },
    },
    { speaker: "girl", text: { ar: "لا تمام كدة", en: "No, that's clear." } },
    {
      // door3-angel-part5.wav
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الثالث", "The Third Angel"),
      cue: "watch",
      audioSrc: ["/audio/doors/door3-angel-part5.wav"],
      text: {
        ar: "خد مفتاح الباب الرابع",
        en: "Take the key of the fourth door.",
      },
    },
  ],
};

// ---------------------------------------------------------------------
// Door 4 — الملاك الرابع
// ---------------------------------------------------------------------
const trumpet4: TrumpetScript = {
  intro: [
    {
      speaker: "narrator",
      text: { ar: "يطلع من الباب التالت ويدخل الباب الرابع", en: "She leaves the third door and enters the fourth." },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الرابع", "The Fourth Angel"),
      text: {
        ar: "بعد ضرب بوقي السماء مش هتبقى فحالتها",
        en: "After my trumpet is sounded, the sky will not stay as it is.",
      },
    },
    {
      speaker: "girl",
      text: { ar: "ليه ؟ هو بوقك هيعمل ايه في السماء ؟", en: "Why? What will your trumpet do to the sky?" },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الرابع", "The Fourth Angel"),
      cue: "watch",
      text: { ar: "تعالي نقرأ عدد 12", en: "Come, let's read verse 12." },
    },
  ],
  closing: [
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الرابع", "The Fourth Angel"),
      text: {
        ar: "اعتقد انك مشفتش إنذار بالخطورة دي قبل كدة , الشمس والقمر ثلثهم وبالتالي الظلام هيزيد ,",
        en: "I don't think you've seen a warning this severe before — a third of the sun and moon are struck, so darkness will increase,",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الرابع", "The Fourth Angel"),
      text: {
        ar: "والظلام بيشل حركة الانسان خصوصا لو زادت مدته , بيفقد الانسان نشاطه وهيمنع نمو النباتات",
        en: "and darkness cripples human activity, especially the longer it lasts — a person loses their energy, and it stops plants from growing.",
      },
    },
    {
      speaker: "girl",
      text: { ar: "طب ما كدة ده تعذيب للبشر", en: "But isn't that torture for humanity?" },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الرابع", "The Fourth Angel"),
      text: { ar: "هي صحيح تبان كدة , لكن مش ده الغرض ,", en: "It really does look that way — but that's not the purpose." },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الرابع", "The Fourth Angel"),
      text: {
        ar: "المقصود م ده كله ان الانسان يفوق لنفسه ويرجع للحق ويرجع يدور علي النور الحقيقي اللي هو ربنا ,",
        en: "The point of all of it is for a person to wake up to themselves, return to the truth, and go back to searching for the real light — which is God,",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الرابع", "The Fourth Angel"),
      cue: "watch",
      text: {
        ar: "كدة انا جاوبتك , المفتاح الخامس اهو , وخد بالك اوي من باقي الطريق , سلام",
        en: "There, I've answered you. Here's the fifth key — and be very careful for the rest of the way. Peace.",
      },
    },
  ],
};

// ---------------------------------------------------------------------
// Door 5 — الملاك الخامس
// ---------------------------------------------------------------------
const trumpet5: TrumpetScript = {
  intro: [
    { speaker: "narrator", text: { ar: "يدخل الباب الخامس", en: "She enters the fifth door." } },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الخامس", "The Fifth Angel"),
      text: {
        ar: "نادرا ما حد بيوصل هنا , بس بما انك وصلت هنا قوليلي تعرفي ايه عن الويل الاول",
        en: "Rarely does anyone make it here — but since you have, tell me: what do you know about the first woe?",
      },
    },
    {
      speaker: "girl",
      text: {
        ar: "اللي اعرفه انه تقريبا في البوق ده بئر الجحيم هتفتح وهيكون في جراد بقوة الاسود ولدعته زي لدعة العقرب واستعداده هيكون زي استعداد احصنة للحرب",
        en: "What I know is that in this trumpet, the pit of the abyss opens, and there will be locusts with the strength of lions, whose sting is like a scorpion's, and they'll be equipped like horses prepared for war.",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الخامس", "The Fifth Angel"),
      cue: "watch",
      text: {
        ar: "دنتي مذاكرة كويس بقا , لازم نقرأ كويس الاول",
        en: "You really have studied well then — but first, we have to read it properly.",
      },
    },
  ],
  closing: [
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الخامس", "The Fifth Angel"),
      text: {
        ar: "في بعض التفاسير سقوط الكوكب ده اشارة لانتكاسة هتحصل لشخصية دينية مركزها كبير ,",
        en: "In some interpretations, this star's fall is a sign of a downfall that will happen to a major religious figure,",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الخامس", "The Fifth Angel"),
      text: {
        ar: "و ده اللي هيفتح بئر الجحيم وهيملى العالم بدخان الشياطين اللي هي افكارهم وعشان تفهمي خطورة الجراد المجهزة للحرب وهيكون بوجه بشر ,",
        en: "and it's what opens the pit of the abyss and fills the world with the smoke of demons, which are their ideas. So you understand the danger of the locusts prepared for war — they'll have the face of a man,",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الخامس", "The Fifth Angel"),
      text: {
        ar: "اما السلطان اللي هيكون عند الجراد ده هتكون شكلها جميل وعندها شعر زي شعر النساء ,",
        en: "and the power these locusts hold — their shape will be beautiful, and they'll have hair like the hair of women,",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الخامس", "The Fifth Angel"),
      text: {
        ar: "لكنها اسنان شبه اسنان الاسود فحدتها , ودروعها وصوت اجنحتها اشارة المفزع لشدة عنف وانتشار الجراد",
        en: "but their teeth will be as sharp as lions' teeth, and their armor and the sound of their wings are a terrifying sign of the ferocity and spread of the locusts,",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الخامس", "The Fifth Angel"),
      text: {
        ar: "وهتعذب البشر لمدة خمس شهور وملكها اسمه أبدون او ابولين اللي معناه المخرب او المهلك ,",
        en: "and they will torment people for five months, and their king's name is Abaddon, or Apollyon, meaning the Destroyer,",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الخامس", "The Fifth Angel"),
      text: {
        ar: "ورغم كل اللي اتقال عن البوق ده ,بنشوف برضه حنان ورحمة ربنا فهو مسمحش بهلاك الخليقة كلها ,",
        en: "and despite everything said about this trumpet, we still see God's tenderness and mercy — He does not allow the whole of creation to be destroyed,",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الخامس", "The Fifth Angel"),
      text: {
        ar: "وده ظهر بردو فحنانه علي الضعفاة ,بيحفظ اللي فبداية الايمان ويعتني بالنفوس الضعيفة اللي محتاجه حنانه ورحمته اكتر",
        en: "and this also shows in His tenderness toward the weak — He protects those still at the beginning of their faith, and cares for the weaker souls who need His tenderness and mercy more,",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك الخامس", "The Fifth Angel"),
      cue: "watch",
      text: {
        ar: "مهما كان اللي شوفته في البوق ده مش هيكون حاجة فصاد اللي جاي , سلام",
        en: "whatever you've seen in this trumpet won't compare to what's coming next. Peace.",
      },
    },
  ],
};

// ---------------------------------------------------------------------
// Door 6 — الملاك السادس
// ---------------------------------------------------------------------
const trumpet6: TrumpetScript = {
  intro: [
    {
      speaker: "narrator",
      text: {
        ar: "يلاقي الملائكة المقيدين يدخل الباب",
        en: "As she enters the door, she finds bound angels.",
      },
    },
    {
      speaker: "girl",
      text: {
        ar: "ايه ده انتوا مين ومربوطين كدة ليه ؟",
        en: "What is this? Who are you, and why are you bound like this?",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك السادس", "The Sixth Angel"),
      text: {
        ar: "ازاي عديتي من كل اللي فات ده ومش عارفة مين دول , علي عموم انا مستني صوت واحد وهفكهم وساعتها هتعرفي هتعملوا ايه",
        en: "How did you get through everything so far and not know who these are? Anyway, I'm waiting for one sound, and then I'll release them — you'll find out then what they'll do.",
      },
    },
    {
      speaker: "girl",
      text: {
        ar: "اهه اعتقد فهمت , دول الاريع ملايئكة المجهزين لقتل تلت الناس , صح ؟ وعلي حسب علمي مش هيكونوا لوحديهم ,هيكون في جيوش فرسان تجهيزها مرعب وعددها مهوول",
        en: "Ah, I think I understand — these are the four angels prepared to kill a third of mankind, right? And as far as I know, they won't be alone — there will be an army of horsemen, terrifyingly equipped and vast in number.",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك السادس", "The Sixth Angel"),
      cue: "watch",
      text: {
        ar: "انا كنت لسة هصدق انك مش عارفة فعلا , بس طلعتي ذكية زي ما سمعت اللي انا مستنيه عشان اضرب البوق هو صوت اربعة قرون مذبح الذهب وبعد ما اسمعه هفك الملائكة دي اللي اتجهزت للحظة دي , وفعلا زي ما قولتي هيكون في جيوش فرسان معاهم جيش فرسان عدده متين مليون , وتجهيز الجيش ده",
        en: "I was about to believe you really didn't know — but you turned out to be sharp. Like you heard, what I'm waiting for to sound my trumpet is the voice of the four horns of the golden altar, and once I hear it, I'll release these angels who were prepared for this very moment. And just as you said, there will be an army of horsemen — two hundred million strong. As for their equipment —",
      },
    },
  ],
  closing: [
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك السادس", "The Sixth Angel"),
      text: {
        ar: "جلوس الفرسان علي الخيول علامة استعداد تام للحرب , ودروع نارية اشارة بأنها حرب حارقة بلا رحمة",
        en: "The horsemen sitting on their horses is a sign of total readiness for war, and fiery armor is a sign it will be a burning war without mercy,",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك السادس", "The Sixth Angel"),
      text: {
        ar: "واسمانجونية دي شكل الدروع اللي هتبقلى قريبة لشكل دروع سماوية وهي بسماح من الله وكبريتية اشارة للغضب الإلهي,",
        en: "hyacinth-colored armor resembles heavenly armor and comes by God's permission, and sulfur-colored armor is a sign of divine wrath,",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك السادس", "The Sixth Angel"),
      text: {
        ar: "وحصلت قبل كدة فحرق سدوم وعمورة وكان بنار وكبريت ,",
        en: "and this happened before, in the burning of Sodom and Gomorrah, which was by fire and sulfur,",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك السادس", "The Sixth Angel"),
      text: {
        ar: "ورؤوس الخيل شكل رؤوس اسود في منظر اكتر رعبا وفتكا وافتراس من ان شكل الرؤوس يكون علي شكل رؤوس خيول عادية ,",
        en: "and the horses' heads are shaped like lions' heads — a far more terrifying, deadly, and predatory sight than if they simply looked like ordinary horses' heads,",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك السادس", "The Sixth Angel"),
      text: {
        ar: "وهتطلع من بوقها نار وكبريت ودخان المراد منها الحرق و التدمير والتبديد ,",
        en: "and from their mouths come fire, sulfur, and smoke, meant for burning, destruction, and devastation,",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك السادس", "The Sixth Angel"),
      text: {
        ar: "وسلطانهم هيكون فكلامهم اللي يبان جميل لكنه كذاب و والاذناب اللي هي ديولهم هتكون شبه الحيات اللي عرفت",
        en: "and their power will be in words that seem beautiful but are false, and their tails, which are like their tails, will be like serpents that you already know",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك السادس", "The Sixth Angel"),
      text: {
        ar: "تضيع من الانسان الاول كل اللي ليه بمكرها",
        en: "cause a person to lose, through their cunning, everything they have.",
      },
    },
    {
      speaker: "girl",
      text: {
        ar: "وهو كدة التلتين الباقيين من الناس اتعظوا من الهلاك العظيم اللي حصل ده ورجعوا عن اللي بيعملوه, مش كدة ؟",
        en: "So then, did the remaining two-thirds of people learn from this great destruction and turn away from what they were doing — didn't they?",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك السادس", "The Sixth Angel"),
      text: {
        ar: "فالحقيقة لا , مبطلوش اي حاجة من اللي كانوا بيعملوها سواء كانت عباد اصنام و ولا عن الزني ولا السحر ولا اي حاجة من اللي بيعملوها,",
        en: "The truth is, no — they didn't stop any of what they were doing, whether idol worship, sexual immorality, sorcery, or anything else they practiced,",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك السادس", "The Sixth Angel"),
      text: {
        ar: "متعظوش وده كان اكبر غلط والبوق اللي هينهي كل الفرص مبقاش بعيد زي مكانوا متخيلين ,",
        en: "they didn't repent, and that was the biggest mistake — and the trumpet that ends every chance is no longer as far off as they imagined,",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك السادس", "The Sixth Angel"),
      cue: "watch",
      text: {
        ar: "الطريق المرادي محتاج تركيز علي غير العادة ,فتحي عنيكي وخليكي جاهزة ,مع السلامة !",
        en: "the road ahead needs unusual focus. Open your eyes and be ready — take care!",
      },
    },
  ],
};

// ---------------------------------------------------------------------
// Door 7 — الملاك السابع
// ---------------------------------------------------------------------
const trumpet7: TrumpetScript = {
  intro: [
    { speaker: "narrator", text: { ar: "يدخل الباب السابع", en: "She enters the seventh door." } },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك السابع", "The Seventh Angel"),
      text: {
        ar: "ست ابواق وعلامتها مرعبة , بس الانسان ده غريب جدا , بعد كل اللي حصل حواليه وكل اللي شافه,متعظش و كمل حياته كأن مفيش حاجة حصلت ,",
        en: "Six trumpets, and their signs are terrifying — but humanity is a strange thing. After everything that happened around them, everything they saw, they didn't repent, and just went on with their lives as if nothing had happened,",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك السابع", "The Seventh Angel"),
      cue: "watch",
      text: {
        ar: "بس مفيش خلاص مفيش مجال للرجوع , بوقي فيه اهم اعلان مُلك حصل , بعد نفخ بوقي هتحصل اصوات عظيمة في السما وهتقول.",
        en: "but there is no escape, no room left to turn back. My trumpet carries the most important announcement of a kingdom that has come to pass. After my trumpet sounds, great voices will be heard in heaven, saying —",
      },
    },
  ],
  closing: [
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك السابع", "The Seventh Angel"),
      text: {
        ar: "ده اعلان النصرة علي مملكة الشيطان واعلان ملك الله ولما اتقالت الايه دي الاربعة وعشرين قسيس الجالسين امام الله علي وشوشهم وسجدا وقالوا",
        en: "This is the announcement of victory over the kingdom of the devil, and the announcement of God's reign. And when this verse was spoken, the twenty-four elders seated before God fell on their faces and worshiped, saying —",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك السابع", "The Seventh Angel"),
      text: {
        ar: "قدموا التسبحة الجميلة دي لله شكراً علي اللي عمله في القصاص من مملكة الشر واثبت انها غير صحيحة ونشر العالم للإيمان واعلان قدرته اللانهائية في صنع وتدبير العالم ,",
        en: "They offered this beautiful hymn to God, thanking Him for what He did in bringing justice on the kingdom of evil and proving it false, for the world turning to faith, and for the declaration of His infinite power in creating and governing the world,",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك السابع", "The Seventh Angel"),
      text: {
        ar: "ولان مش كل النهايات سعيدة , البوق بينتهي بظهور عهد اتابوت وظهور علامات تأديبية",
        en: "and because not every ending is a happy one, the trumpet closes with the appearing of the ark of the covenant and the appearing of signs of discipline —",
      },
    },
    {
      speaker: "angel",
      speakerLabel: angelLabel("الملاك السابع", "The Seventh Angel"),
      text: {
        ar: "دي مظاهر مرتبطه بعظمة و جلال الله و هيبته و بتعلن ان حدثا عظيما بيتم امام حضرته",
        en: "these are signs tied to the greatness, majesty, and awe of God, declaring that a great event is taking place before His presence.",
      },
    },
  ],
};

export const trumpetScripts: Record<number, TrumpetScript> = {
  1: trumpet1,
  2: trumpet2,
  3: trumpet3,
  4: trumpet4,
  5: trumpet5,
  6: trumpet6,
  7: trumpet7,
};

export const speakerName = {
  narrator: { en: "The Narrator", ar: "الراوي" },
  girl: { en: "The Main Character", ar: "الشخصية الرئيسية" },
  angel: { en: "The Angel", ar: "الملاك" },
} as const;

/** Default composition: protagonist left, Angel right, Narrator left. */
export const defaultSide = {
  girl: "left",
  angel: "right",
  narrator: "left",
} as const;
