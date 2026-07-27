// ==========================================================
// Bu dosya data.js icindeki verileri sayfaya ve grafiklere basar.
// Her bolum try/catch icinde: biri hata verse bile digerleri calismaya devam eder.
// ==========================================================

// ---- KPI kartlari ----
try {
  const kpiGrid = document.getElementById('kpiGrid');
  KPI_DATA.forEach(k => {
    kpiGrid.insertAdjacentHTML('beforeend', `
      <div class="kpi-card">
        <div class="kpi-top">
          <span class="kpi-label">${k.label}</span>
          <span class="kpi-icon" style="background:${k.color};color:${k.iconColor}">${k.icon}</span>
        </div>
        <div class="kpi-value">${k.value}
          <span class="kpi-delta up">%${k.delta} ↑</span>
        </div>
        <div class="kpi-sub">Onceki 7 gune gore</div>
      </div>
    `);
  });
} catch (e) { console.error('KPI kartlari cizilirken hata:', e); }

// ---- Bekleme nedeni kartlari ----
try {
  const maxReason = Math.max(...REASON_DATA.map(r => r.value));
  const reasonGrid = document.getElementById('reasonGrid');
  REASON_DATA.forEach(r => {
    reasonGrid.insertAdjacentHTML('beforeend', `
      <div class="reason-card">
        <div class="reason-top">
          <span class="reason-name">${r.label}</span>
          <span class="reason-ic">${r.icon}</span>
        </div>
        <div class="reason-value">
          <span class="reason-num">${r.value}</span>
          <span class="reason-delta ${r.dir}">%${r.delta} ${r.dir === 'up' ? '↑' : '↓'}</span>
        </div>
        <div class="reason-bar"><div class="reason-bar-fill" style="width:${(r.value/maxReason)*100}%;background:${r.color}"></div></div>
      </div>
    `);
  });
} catch (e) { console.error('Bekleme nedeni kartlari cizilirken hata:', e); }

// ---- Ortak donut cizici ----
function drawDonut(canvasId, centerId, legendId, data) {
  try {
    if (typeof Chart === 'undefined') {
      throw new Error('Chart.js yuklenemedi (CDN engellenmis olabilir).');
    }
    const ctx = document.getElementById(canvasId);
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: data.segments.map(s => s.label),
        datasets: [{
          data: data.segments.map(s => s.value),
          backgroundColor: data.segments.map(s => s.color),
          borderWidth: 0,
        }]
      },
      options: {
        cutout: '72%',
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: true } }
      }
    });

    document.getElementById(centerId).innerHTML = `
      <span class="dc-num">${data.total}</span>
      <span class="dc-label">Toplam</span>
    `;

    const legend = document.getElementById(legendId);
    data.segments.forEach(s => {
      legend.insertAdjacentHTML('beforeend', `
        <li>
          <span class="sw" style="background:${s.color}"></span>
          <span>
            <div class="leg-main">${s.label}</div>
            <div class="leg-sub">${s.value} (${s.pct})</div>
          </span>
        </li>
      `);
    });
  } catch (e) {
    console.error(canvasId + ' cizilirken hata:', e);
  }
}

drawDonut('akanChart', 'akanCenter', 'akanLegend', AKAN_AKMAYAN);
drawDonut('kanalChart', 'kanalCenter', 'kanalLegend', KANAL_DAGILIMI);

// ---- Bar chart ----
try {
  if (typeof Chart === 'undefined') {
    throw new Error('Chart.js yuklenemedi (CDN engellenmis olabilir).');
  }
  new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
      labels: BAR_CHART.labels,
      datasets: [{
        data: BAR_CHART.values,
        backgroundColor: BAR_CHART.colors,
        borderRadius: 6,
        maxBarThickness: 46,
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, grid: { color: '#eef0f5' } },
        x: { grid: { display: false } }
      }
    }
  });
} catch (e) { console.error('Bar chart cizilirken hata:', e); }

// ---- Kritik siparisler tablosu ----
try {
  const tbody = document.querySelector('#ordersTable tbody');
  ORDERS.forEach(o => {
    const statusClass = o.durum === 'İşlemde' ? 'islemde' : 'bekliyor';
    tbody.insertAdjacentHTML('beforeend', `
      <tr>
        <td>${o.no}</td>
        <td>${o.code}</td>
        <td>${o.name}</td>
        <td>${o.kanal}</td>
        <td>${o.neden}</td>
        <td>${o.sorumlu}</td>
        <td>${o.teslim}</td>
        <td><span class="status ${statusClass}">${o.durum}</span></td>
      </tr>
    `);
  });
} catch (e) { console.error('Siparis tablosu cizilirken hata:', e); }

// ---- Bildirimler ----
try {
  const notifIcons = {
    warn:  { ic:'⚠️', bg:'#fde5e5', c:'#e11d2e' },
    clock: { ic:'🕐', bg:'#fdf1de', c:'#e0a020' },
    info:  { ic:'ℹ️', bg:'#e8edfb', c:'#3b82f6' },
    ok:    { ic:'✅', bg:'#e3f7ec', c:'#2fb872' },
  };
  const notifList = document.getElementById('notifList');
  NOTIFICATIONS.forEach(n => {
    const s = notifIcons[n.type];
    notifList.insertAdjacentHTML('beforeend', `
      <li class="notif-item">
        <span class="notif-ic" style="background:${s.bg};color:${s.c}">${s.ic}</span>
        <span>
          <div class="notif-title">${n.title}</div>
          <div class="notif-desc">${n.desc}</div>
        </span>
        <span class="notif-time">${n.time}</span>
      </li>
    `);
  });
} catch (e) { console.error('Bildirimler cizilirken hata:', e); }
