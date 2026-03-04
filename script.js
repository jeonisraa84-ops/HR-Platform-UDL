const app = {
    users: {
        // فريق الإدارة المعالج
        "ليلى": { name: "ليلى", rank: "ملحق إدارة رئيسي (فريق المعالجة)", role: "admin", avatar: "L" },
        "حبار سارة": { name: "حبار سارة", rank: "ملحق إدارة رئيسي (فريق المعالجة)", role: "admin", avatar: "S" },
        "قندسي منار اسراء": { name: "قندسي منار اسراء", rank: "ملحق إدارة رئيسي (فريق المعالجة)", role: "admin", avatar: "E" },
        
        // قائمة المتعاقدين والأعوان
        "عدة بشير سعيد": { name: "عدة بشير سعيد", rank: "حارس", role: "user", avatar: "B" },
        "قداري قويدر": { name: "قداري قويدر", rank: "حارس", role: "user", avatar: "Q" },
        "رحالي ستي": { name: "رحالي ستي", rank: "حارس", role: "user", avatar: "R" },
        "مفتاح عباس": { name: "مفتاح عباس", rank: "عون وقاية ثانٍ", role: "user", avatar: "M" },
        "عابد محي الدين": { name: "عابد محي الدين", rank: "عون وقاية ثانٍ", role: "user", avatar: "A" },
        "مجوبة عبد الحق": { name: "مجوبة عبد الحق", rank: "عامل مهني ثالث", role: "user", avatar: "H" },
        "غمبازة عبد الرحمان": { name: "غمبازة عبد الرحمان", rank: "عامل مهني ثالث", role: "user", avatar: "G" },
        "بكرة نصر الدين": { name: "بكرة نصر الدين", rank: "عامل مهني أول", role: "user", avatar: "N" },
        "سهلي رضا": { name: "سهلي رضا", rank: "عامل مهني أول", role: "user", avatar: "S" },
        "يحياوي عبد الرزاق": { name: "يحياوي عبد الرزاق", rank: "عامل مهني أول", role: "user", avatar: "Y" }
    },

    login: function() {
        const val = document.getElementById('nameInput').value.trim();
        if (this.users[val]) {
            const u = this.users[val];
            document.getElementById('loginScreen').style.display = 'none';
            document.getElementById('appPage').style.display = 'flex';
            document.getElementById('uName').innerText = u.name;
            document.getElementById('uRank').innerText = u.rank;
            document.getElementById('avatar').innerText = u.avatar;

            if (u.role === "admin") {
                document.getElementById('adminView').style.display = 'block';
                document.getElementById('userView').style.display = 'none';
                document.getElementById('navTitle').innerText = "✨ لوحة معالجة ملفات المتعاقدين";
            } else {
                document.getElementById('adminView').style.display = 'none';
                document.getElementById('userView').style.display = 'block';
                document.getElementById('navTitle').innerText = "📋 بوابة طلباتك الإدارية";
            }
        } else {
            alert("⚠️ عذراً، هذا الاسم غير مسجل في قاعدة بيانات مصلحة المتعاقدين.");
        }
    },

    showTab: function(t) {
        document.getElementById('homeTab').style.display = (t==='home'?'block':'none');
        document.getElementById('guideTab').style.display = (t==='guide'?'block':'none');
        document.getElementById('btnHome').classList.toggle('active', t==='home');
        document.getElementById('btnGuide').classList.toggle('active', t==='guide');
    },

    processDoc: function(name) {
        alert(`تمت المعالجة بنجاح! تم إرسال وثيقة ${name} وهي جاهزة للاستلام.`);
    },

    submitRequest: function() {
        alert("✅ تم إرسال طلبك بنجاح. ستقوم ليلى أو سارة أو إسراء بمعالجته قريباً.");
    },

    logout: function() { location.reload(); }
};