
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, Clock, MapPin, Users, Phone } from "lucide-react";

const MindfulnessWorkshop = () => {
  return (
    <div className="min-h-screen bg-background font-assistant text-right" dir="rtl">
      {/* Hero Section */}
      <section className="px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-6" />
          </div>
          <h1 className="font-frank text-4xl md:text-6xl font-light text-foreground mb-6 leading-tight">
            סדנת מיינדפולנס
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8">
            שלושה מפגשים עדינים להתחברות עצמית
          </p>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            הזמנה אישית ללמוד איך להיות נוכחים, לנשום, ולגלות מחדש את היופי שבחיים הפשוטים
          </p>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="px-4 py-16 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-frank text-3xl font-light text-center mb-12">
            קצת עליי
          </h2>
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                שלום, אני מתרגלת מיינדפולנס, זן וטאי צ'י כבר שנים רבות. המסע הזה שינה את חיי באופן עמוק - 
                לימד אותי איך למצוא שקט בתוך הרעש, איך להיות נוכחת ברגע, ואיך לגלות חמלה כלפי עצמי וכלפי אחרים.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                עכשיו, אחרי שנים של תרגול אישי, אני מתחילה לחלוק את מה שלמדתי. לא כמומחית, אלא כאדם 
                שמצא דרך לחיות בצורה יותר מלאה ורגועה.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                הסדנה הזאת היא הזמנה לגלות יחד איך תרגולים פשוטים יכולים להביא יותר נוכחות, שלווה וחיבור 
                לחיים שלנו.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Workshop Overview */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-frank text-3xl font-light text-center mb-12">
            מה נעשה יחד?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-muted/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-frank text-xl font-medium mb-4">מפגש ראשון</h3>
                <p className="text-muted-foreground leading-relaxed">
                  היכרות עם נשימה מודעת ותרגולי נוכחות בסיסיים. נלמד איך להקשיב לגוף ולנשימה שלנו.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-muted/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-frank text-xl font-medium mb-4">מפגש שני</h3>
                <p className="text-muted-foreground leading-relaxed">
                  תרגולי מיינדפולנס בפעילויות יומיומיות - איך להביא נוכחות לאכילה, הליכה ושיחות.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-muted/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-frank text-xl font-medium mb-4">מפגש שלישי</h3>
                <p className="text-muted-foreground leading-relaxed">
                  פיתוח תרגול אישי וכלים להמשך המסע. איך לשמור על נוכחות גם בזמנים קשים.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="px-4 py-16 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-frank text-3xl font-light mb-8">
            בשביל מי הסדנה הזאת?
          </h2>
          <div className="flex justify-center mb-8">
            <Users className="w-12 h-12 text-muted-foreground" />
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              • אנשים שמחפשים דרכים להאט ולהתחבר לעצמם
            </p>
            <p>
              • מי שרוצה ללמוד איך להיות יותר נוכח בחיים היומיומיים
            </p>
            <p>
              • מתחילים לגמרי - לא צריך שום ניסיון קודם
            </p>
            <p>
              • מי שמחפש פשטות ואותנטיות, לא תיאוריות מסובכות
            </p>
            <p className="font-medium">
              האווירה תהיה חמה, תומכת ולא שיפוטית 💚
            </p>
          </div>
        </div>
      </section>

      {/* Session Details */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-frank text-3xl font-light text-center mb-12">
            פרטי הסדנה
          </h2>
          <Card className="border-muted/50">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-muted-foreground mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">תאריכים</h3>
                    <p className="text-muted-foreground">
                      שלושה רביעיים: 15.1, 22.1, 29.1
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-muted-foreground mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">זמן</h3>
                    <p className="text-muted-foreground">
                      19:00-20:30 (שעה וחצי כל מפגש)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-muted-foreground mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">מקום</h3>
                    <p className="text-muted-foreground">
                      סטודיו יוגה "שקט", רחוב הנרקיס 15, תל אביב
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      (קרוב לתחנת אופניים ומקומות חניה)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-muted-foreground mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">מחיר</h3>
                    <p className="text-muted-foreground">
                      ₪300 עבור שלושת המפגשים
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      (אם המחיר מהווה מכשול, בואו נדבר)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-muted-foreground mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">הרשמה</h3>
                    <p className="text-muted-foreground mb-3">
                      במספר: 050-1234567 או בווצאפ
                    </p>
                    <p className="text-sm text-muted-foreground">
                      מספר המקומות מוגבל ל-8 משתתפים
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-muted">
                <Button 
                  className="w-full md:w-auto mx-auto block px-8 py-3 text-lg"
                  onClick={() => window.open('https://wa.me/972501234567', '_blank')}
                >
                  שלחו הודעה בווצאפ להרשמה
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Closing Message */}
      <section className="px-4 py-16 bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            זה יהיה מסע עדין של גילוי. לא מרוץ, לא תחרות - רק זמן איכות עם עצמנו ועם אחרים 
            שמחפשים משהו דומה.
          </p>
          <p className="text-lg text-muted-foreground mt-6">
            מחכה לפגוש אתכם 🌸
          </p>
        </div>
      </section>
    </div>
  );
};

export default MindfulnessWorkshop;
