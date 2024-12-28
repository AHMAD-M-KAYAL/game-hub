import { useState, useEffect } from "react";

export default function OnChangeScreen() {
  // تعريف الحالة لتخزين عرض الشاشة
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  useEffect(() => {
    // وظيفة لتحديث العرض عند تغيير حجم النافذة
    const handleResize = () => setWidthScreen(window.innerWidth);

    // إضافة مستمع للأحداث عند تحميل المكون
    window.addEventListener("resize", handleResize);

    // تنظيف مستمع الأحداث عند إزالة المكون
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { widthScreen };
}
