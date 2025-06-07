import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Calendar,
  Clock,
  MapPin,
  Users,
  Phone,
  DollarSign,
} from "lucide-react";
//
const MindfulnessWorkshop = () => {
  return (
    <div
      className="min-h-screen bg-background font-assistant text-right"
      dir="rtl"
    >
      {/* Hero Section */}
      <section className="px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Brain className="w-12 h-12 text-warm-muted mx-auto mb-6" />
          </div>
          <h1 className="font-assistant text-4xl md:text-6xl font-semibold text-foreground mb-6 leading-tight">
            🌿 סדנת מיינדפולנס
          </h1>
          <p className="text-xl md:text-2xl text-warm-muted font-medium mb-8">
            שלושה מפגשים לעצירה, הקשבה והתפתחות
          </p>
          <div className="text-lg text-warm-muted font-light max-w-2xl mx-auto leading-relaxed space-y-4">
            <p>לפעמים כל מה שצריך זה שמישהו יגיד לך שאתה בסדר.</p>
            <p>ולפעמים – אתה יכול להיות זה שעושה את זה לעצמך.</p>
            <div className="mt-8 space-y-2">
              <p>בואו לפגוש את עצמכם בלי הפרעות.</p>
              <p>לנשום.</p>
              <p>להאט.</p>
              <p>ולגלות את הרגע הזה – בכל פעם מחדש.</p>
            </div>
            <p className="mt-8">
              בתוך מציאות של חוסר שגרה ולחץ מתמשך, נלמד לפתח יציבות, רוך וחוסן
              פנימי דרך תרגול מיינדפולנס וזן. נעצור לרגע באמת — כדי להקשיב למה
              שזקוק לקול, ולתת מקום למה שבדרך כלל נדחק לשוליים ועוצר אותנו
              מלחיות את החיים שאנחנו באמת רוצים.
            </p>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="px-4 py-16 bg-warm-muted/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-assistant text-3xl font-semibold mb-8">
            🧭 למי זה מתאים?
          </h2>
          <div className="text-lg text-warm-muted leading-relaxed space-y-4">
            <p>הסדנה מתאימה למי שאכפת לו מעצמו ורוצה לפגוש את עצמו קצת אחרת.</p>
            <p>
              למי שמרגיש צורך להאט, לנשום, להקשיב פנימה – גם אם זה לא תמיד פשוט
              למצוא לזה מקום ביומיום.
            </p>
            <p>
              היא פתוחה למי שחדש במדיטציה וגם למי שכבר מתרגל – אין צורך בניסיון
              קודם, רק ברצון להתקרב לעצמך.
            </p>
            <p>
              באופן אישי, ה־wellbeing שלי תמיד היה חשוב לי – אבל לא תמיד היו לי
              הכלים להבין מה באמת קורה בתוכי או איך לטפל בזה ברוך. כשהתחלתי
              לתרגל מיינדפולנס וזן, גיליתי דרך פשוטה ונגישה ליציבות, נשימה וחמלה
              – ואני שמח להזמין גם אותך לגלות אותה יחד.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-assistant text-3xl font-semibold text-center mb-12">
            👤 עליי בקצרה
          </h2>
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="p-8">
              <div className="text-lg leading-relaxed text-warm-muted space-y-6">
                <p>
                  שמי עמית בירן, ואני עובד עם נשימה, תנועה ומיינדפולנס כבר שנים
                  – הדרך שלי התחילה בטאי צ'י וצ'י קונג, והמשיכה לעומק דרך תרגול
                  זן ומדיטציה.
                </p>
                <p>
                  לאורך השנים ליוויתי גם אחרים בעזרת הכלים האלו – לא מתוך עמדה
                  של "מורה", אלא מתוך רצון אמיתי לשתף את מה שעבד בשבילי.
                </p>
                <p>
                  ראיתי איך תרגול עקבי משפיע על בריאות, מערכות יחסים, חיי
                  היומיום והיכולת להתמודד עם אתגרים.
                </p>
                <p>
                  הסדנה הזו היא הזמנה לתרגל יחד – בגובה העיניים, בפשטות, ומתוך
                  ניסיון חיים אמיתי.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Practice Section */}
      <section className="px-4 py-16 bg-warm-muted/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-assistant text-3xl font-semibold text-center mb-12">
            🌀 למה לתרגל?
          </h2>
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="p-8">
              <div className="text-lg leading-relaxed text-warm-muted space-y-6">
                <p>
                  תרגול מדיטציה תורם להרגעה ומסייע בהתמודדות עם מצבים כמו חרדה,
                  דיכאון ועומס רגשי – זה מגובה גם במחקרים וגם בניסיון האישי שלי.
                </p>
                <p>
                  אבל יש לתרגול גם פן נוסף, עמוק לא פחות: הוא עוזר לנו לפתח
                  ריכוז, מיקוד ובהירות.
                </p>
                <p>
                  הוא מסייע לנו לסנן רעשים פנימיים וספקות, ולפגוש את החיים עם
                  יותר חוסן, תחושת מסוגלות, שלווה ואושר טבעי.
                </p>
                <p>
                  כשהקשב לעצמנו מתחדד – גם הקשרים עם אחרים נהיים מדויקים יותר.
                </p>
                <p>
                  אנחנו מוצאים את עצמנו בפחות עימותים, עם עצמנו ועם הסביבה,
                  ונבנית בנו יכולת לפעול מתוך שקט פנימי ואמון בדרך שלנו.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Workshop Overview */}
      <section className="px-4 py-16 bg-warm-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-assistant text-3xl font-semibold text-center mb-12">
            🧘 מה נעשה בסדנה?
          </h2>
          <div className="mb-8 text-center">
            <p className="text-lg text-warm-muted leading-relaxed">
              במהלך שלושה מפגשים נשלב תרגול מונחה, לימוד תודעתי, ושיחה פתוחה
              בגובה העיניים. נקבל כלים שאפשר לקחת לחיים עצמם – לעבודה, לזוגיות,
              להורות, ולמפגש עם עצמנו.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-warm-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-assistant text-xl font-semibold mb-4">
                  ✔️ מפגש ראשון – נוכחות ונשימה
                </h3>
                <div className="text-warm-muted leading-relaxed space-y-2">
                  <p>נלמד טכניקות של נשימה מודעת</p>
                  <p>נתרגל מיינדפולנס בסיסי</p>
                  <p>נפתח את הלב בתרגול של מטה – אהבה וחמלה פשוטה</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-warm-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-assistant text-xl font-semibold mb-4">
                  ✔️ מפגש שני – גוף, רגש ותוצאה
                </h3>
                <div className="text-warm-muted leading-relaxed space-y-2">
                  <p>נתרגל הקשבה לתחושות הגוף</p>
                  <p>נחקור איך רגשות ומחשבות מופיעות בגוף</p>
                  <p>נלמד עקרונות של סיבה ותוצאה בחיים האישיים</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-warm-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-assistant text-xl font-semibold mb-4">
                  ✔️ מפגש שלישי – סקרנות ומבט פתוח
                </h3>
                <div className="text-warm-muted leading-relaxed space-y-2">
                  <p>נלמד לתרגל סקרנות כתודעה מתבוננת</p>
                  <p>נחקור איך לשחרר תפיסות ולפגוש את הרגע הזה מחדש</p>
                  <p>נשאיר מקום למה שמתעורר</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Session Details */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-assistant text-3xl font-bold text-center mb-12">
            📅 פרטים והרשמה
          </h2>
          <Card className="border-warm-border">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-warm-muted mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">🗓 מתי</h3>
                    <p className="text-warm-muted">ימי חמישי החל מה 17.7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-warm-muted mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">📍 איפה</h3>
                    <p className="text-warm-muted">רחוב הבנים 21 נס ציונה</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <DollarSign className="w-6 h-6 text-warm-muted mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">💰 עלות</h3>
                    <p className="text-warm-muted">
                      30 שקלים למפגש. 90 שקלים לכל הסדנה
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-warm-muted mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">📩 להרשמה</h3>
                    <p className="text-warm-muted mb-3">להרשמה 0526615611</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-warm-border">
                <Button
                  className="w-full md:w-auto mx-auto block px-8 py-3 text-lg"
                  onClick={() =>
                    window.open("https://wa.me/972526615611", "_blank")
                  }
                >
                  שלחו לי הודעה בוואטסאפ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default MindfulnessWorkshop;
