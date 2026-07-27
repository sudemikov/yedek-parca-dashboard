// ==========================================================
// Buradaki verileri kendi verilerinizle değiştirebilirsiniz.
// ==========================================================

const KPI_DATA = [
  { label:"TOPLAM AÇIK SİPARİŞ", value:425, delta:8,  icon:"📦", color:"#e8edfb", iconColor:"#3b5bdb" },
  { label:"AKAN PARÇA (2011)",   value:312, delta:6,  icon:"🛒", color:"#e3f7ec", iconColor:"#2fb872" },
  { label:"AKMAYAN PARÇA (2012)",value:113, delta:12, icon:"📦", color:"#fdeee0", iconColor:"#f5a524" },
  { label:"KAZALI ARAÇ SİPARİŞİ",value:18,  delta:20, icon:"🚗", color:"#fde5e5", iconColor:"#e11d2e" },
  { label:"ÖNE ÇEKME TALEBİ",    value:27,  delta:3,  icon:"⏩", color:"#fdf1de", iconColor:"#e0a020" },
  { label:"MÜŞTERİ SİPARİŞİ",    value:156, delta:10, icon:"👤", color:"#e8edfb", iconColor:"#3b5bdb" },
];

const REASON_DATA = [
  { label:"PLANLAMA",       value:12, delta:4,  dir:"up",   icon:"👥", color:"#3b82f6" },
  { label:"SSH",            value:18, delta:12, dir:"down", icon:"🧑‍🔧", color:"#8b5cf6" },
  { label:"YURTİÇİ TEDARİK",value:45, delta:15, dir:"up",   icon:"🚚", color:"#14b8a6" },
  { label:"İTHALAT",        value:22, delta:2,  dir:"down", icon:"🚧", color:"#e11d2e" },
  { label:"DEPO",           value:21, delta:5,  dir:"up",   icon:"🏬", color:"#f5a524" },
  { label:"İÇ LOJİSTİK",    value:8,  delta:11, dir:"down", icon:"🚛", color:"#2fb872" },
];

const AKAN_AKMAYAN = {
  total: 425,
  segments: [
    { label:"Akan Parça (2011)",    value:312, pct:"73,4%", color:"#2fb872" },
    { label:"Akmayan Parça (2012)", value:113, pct:"26,6%", color:"#e11d2e" },
  ]
};

const KANAL_DAGILIMI = {
  total: 425,
  segments: [
    { label:"2011 (Akan)",    value:312, pct:"73,4%", color:"#3b82f6" },
    { label:"2012 (Akmayan)", value:113, pct:"26,6%", color:"#e11d2e" },
  ]
};

const BAR_CHART = {
  labels: ["Planlama","SSH","Yurtiçi Tedarik","İthalat","Depo","İç Lojistik"],
  values: [12,18,45,22,21,8],
  colors: ["#3b82f6","#8b5cf6","#14b8a6","#f5a524","#f5c518","#2fb872"]
};

const ORDERS = [
  { no:"4501234567", code:"8-98012345-0", name:"FREN DİSKİ ÖN",    kanal:"2011", neden:"Kazalı Araç",     sorumlu:"İç Lojistik",     teslim:"23.05.2025", durum:"İşlemde" },
  { no:"4501234590", code:"8-98123456-0", name:"KAPUT KOMPLE",     kanal:"2011", neden:"Kazalı Araç",     sorumlu:"Yurtiçi Tedarik", teslim:"22.05.2025", durum:"Bekliyor" },
  { no:"4501234601", code:"8-98234567-0", name:"FAR SAĞ",          kanal:"2012", neden:"Öne Çekme",       sorumlu:"İthalat",         teslim:"24.05.2025", durum:"Bekliyor" },
  { no:"4501234622", code:"8-98345678-0", name:"AYNA KOMPLE SOL",  kanal:"2011", neden:"Müşteri Siparişi",sorumlu:"Depo",            teslim:"25.05.2025", durum:"İşlemde" },
  { no:"4501234633", code:"8-98456789-0", name:"TAMPON ÖN",        kanal:"2012", neden:"Kazalı Araç",     sorumlu:"İç Lojistik",     teslim:"23.05.2025", durum:"Bekliyor" },
];

const NOTIFICATIONS = [
  { type:"warn",  title:"Kazalı araç siparişi: 4501234567", desc:"FREN DİSKİ ÖN malzemesi için acil işlem bekleniyor.", time:"10:30" },
  { type:"clock", title:"Teslim tarihi yaklaşıyor: 7 sipariş", desc:"3 gün içinde teslim tarihi olan siparişler bulunmaktadır.", time:"09:15" },
  { type:"info",  title:"Stok kritik seviyesi altında", desc:"5 malzemenin stok seviyesi kritik seviyenin altında.", time:"08:45" },
  { type:"ok",    title:"Depoya giriş bekleyen 21 sipariş", desc:"Depoya giriş işlemi bekleyen siparişler bulunmaktadır.", time:"08:30" },
];
