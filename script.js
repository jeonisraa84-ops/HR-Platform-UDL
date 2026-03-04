const app = {
    // طلب تجريبي يظهر للموظفات (ليلى/سارة/إسراء)
    requests: [
        { id: 101, name: "سهلي رضا", doc: "شهادة عمل", status: "جديد" }
    ],

    users: {
        "ليلى": { name: "ليلى", rank: "ملحق إدارة رئيسي", role: "admin", avatar: "L" },
        "حبار سارة": { name: "حبار سارة", rank: "ملحق إدارة رئيسي", role: "admin", avatar: "S" },
        "قندسي منار اسراء": { name: "قندسي منار اسراء", rank: "ملحق إدارة رئيسي", role: "admin", avatar: "E" },
        "سهلي رضا": { name: "سهلي رضا", rank: "عامل مهني أول", role: "user", avatar: "S" },
        "عدة بشير سعيد": { name: "عدة بشير سعيد", rank: "حارس", role: "user", avatar: "B" },
        "مفتاح عباس": { name: "مفتاح عباس", rank: "عون وقاية ثانٍ", role: "user", avatar: "M" }
    },

    login: function() {
        const val = document.getElementById('nameInput').value.trim();
        if (this.users[val]) {
            this.user = this.users[val];
            document.getElementById('loginScreen').style.display = 'none';
            document.getElementById('appPage').style.display = 'flex';
            document.getElementById('uName').innerText = this.user.name;
            document.getElementById('uRank').innerText = this.user.rank;
            document.getElementById('avatar').innerText = this.user.avatar;
            this.setupUI();
        } else { alert("عذراً.. الاسم غير موجود!"); }
    },

    setupUI: function() {
        if (this.user.role === "admin") {
            document.getElementById('adminView').style.display = 'block';
            document.getElementById('userView').style.display = 'none';
            document.getElementById('navTitle').innerText = "📋 لوحة معالجة الملفات الواردة";
            this.renderTable();
        } else {
            document.getElementById('adminView').style.display = 'none';
            document.getElementById('userView').style.display = 'block';
            document.getElementById('navTitle').innerText = "✨ بوابة الطلبات الإلكترونية";
        }
    },

    renderTable: function() {
        const body = document.getElementById('adminTableBody');
        body.innerHTML = this.requests.map(r => `
            <tr>
                <td>${r.name}</td>
                <td>${r.doc}</td>
                <td style="color:#feca57">قيد الانتظار</td>
                <td><button class="btn-ready" onclick="app.complete(${r.id})">جاهز للإرسال ✅</button></td>
            </tr>
        `).join('') || "<tr><td colspan='4'>لا توجد طلبات حالياً</td></tr>";
    },

    complete: function(id) {
        this.requests = this.requests.filter(r => r.id !== id);
        alert("✅ تم إنجاز الوثيقة وإرسال إشعار للمتعاقد. سيتم حذف الطلب الآن.");
        this.renderTable();
    },

    sendRequest: function() {
        const d = document.getElementById('docSelect').value;
        alert(`تم إرسال طلب (${d}) للمصلحة. فريق الإدارة سيعالجون طلبك قريباً.`);
    },

    showTab: function(t) {
        document.getElementById('homeTab').style.display = (t==='home'?'block':'none');
        document.getElementById('guideTab').style.display = (t==='guide'?'block':'none');
        document.getElementById('btnHome').classList.toggle('active', t==='home');
        document.getElementById('btnGuide').classList.toggle('active', t==='guide');
    },

    logout: function() { location.reload(); }
};
