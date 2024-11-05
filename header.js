export const headers = {
  addressregister2: {
    file: "addressregister2",
    header: `|;;|FirmaID|KontaktID|FirmaNamn|GodsAdress|GodsPostNr|GodsOrt|PostAdress|PostNr|PostOrt|Kontaktperson|Riktnr|TelefonVx|RiktnrDirekt|TelefonDirekt|RiktnrBil|BilTelefon|RiktnrFax|Fax|Kommentar|WebAdress|ePostAdress|Anvaendare|PrivLosenord|ReservdelsID|Reservdelstyp|Arbetsgrupp|Aktuellt|Skapadav|Skapadavtid|Redigeradav|Redigeradavtid|Bild1|Bild2|IngaarI|FRLong01|FRLong02|FRLong03|FRStr01|FRStr02|FRStr03|FRDate01|FRDate02|FRDate03|FRTF01|FRTF02|FRTF03|OvrAdress|OvrPostNr|OvrOrt|PIN|Lagerplats2|Sprak|Valuta||$$|`,
  },
  anvandare: {
    file: "anvandare",
    header: `|;;|FirmaID|FirmaNamn|Expr1002|ePostAdress|PrivLosenord|Anvaendare|Arbetsgrupp|ReservdelsID|BilTelefon||$$|`,
  },
  anvandarebeh: {
    file: "anvandarebeh",
    header: `|;;|FirmaID|FirmaNamn|Expr1002|ePostAdress|PrivLosenord|Anvaendare|Arbetsgrupp|ReservdelsID|BilTelefon||$$|`,
  },
  arbetsordertyp: {
    file: "arbetsordertyp",
    header: `|;;|ID|AOtyp|Beskrivning|Standard|Form|BrytUt|Color|Personal|Maila|BehAnvaendare||$$|`,
  },
  arkiveringskod: {
    file: "arkiveringskod",
    header: `|;;|Arkiveringskod|Beskrivning|Neka_Arkivera|Neka_Spara|Neka_Oppna|Neka_Se||$$|`,
  },
  autorapporter: {
    file: "autorapporter",
    header: `|;;|ID|UtskriftsID|Rubrik|Kommentar|Intervall|Enhet|Tidpunkt|FirmaID|Filter|Aktiv|Skapadav|Skapadavtid|Redigeradav|Redigeradavtid|Rapportnamn|Filternamn||$$|`,
  },
  autorapporterlog: {
    file: "autorapporterlog",
    header: `|;;|ID|AutorapportID|ePostAdress|Tidpunkt|UtskriftsID|Rubrik|Kommentar|Filter|Skickades|FelTyp|FelKommentar||$$|`,
  },
  customlabels: {
    file: "customlabels",
    header: `|;;|ID|Register|Nyckel|NyckelVarde|Kolumn|Varde||$$|`,
  },
  felanmalan: {
    file: "felanmalan",
    header: `|;;|FelaId|MaskinID|AnmaelningsTidPunkt|Anmaelare|Anmaelan|Kvittens|KvitteradTidPunkt|KvitteradUser|orsak|projekt|aoId|Status|user|Personal|Text1|Text2|Text3|Text4|Text5|Text6|Text7|Text8|Text9|FirmaID|Maskinbeskrivning|AntalUtskrifter|FDatum|fuser|wo|onskatFdatum|FNLong01|FNLong02|FNLong03|FNStr01|FNStr02|FNStr03|FNDate01|FNDate02|FNDate03|FNTF01|FNTF02|FNTF03|Skapadav|Skapadavtid|Redigeradav|Redigeradavtid|Print|Mejl|SMS|Last|NotifieraMejl|MaskinBen|Avdelning|Avdgrp1|Avdgrp2|MaskinBild||$$|`,
  },
  felanmalan_dok: {
    file: "felanmalan_dok",
    header: `|;;|tabid|FelaId|Beskrivning|Dokument|Utskrift|Dokpath|Kopiera||$$|`,
  },
  firmastrukt: {
    file: "firmastrukt",
    header: `|;;|ID|FirmaID|ReservdelsID|Benaemning|LevResID|Pris|InPris|Kommentar|StdLev|FRLong01|FRLong02|FRLong03|FRStr01|FRStr02|FRStr03|FRTF01|FRTF02|FRTF03|Skapadav|Skapadavtid|Redigeradav|Redigeradavtid|Fabrikat|LName|LBild|Valuta||$$|`,
  },
  glbfilter: {
    file: "glbfilter",
    header: `|;;|postid|SQL|Filteronoff|Sortering|Namn|Beskrivning|Formular|fromTidpunkt|tomTidpunkt|maxDateSelection|minDateSelection|FirmaID|LPN|Register|Struktur|Grupp|Skapadav|Skapadavtid|Redigeradav|Redigeradavtid|EndastWebb|StruktursokMaskinID||$$|`,
  },
  glbfiltergrupp: {
    file: "glbfiltergrupp",
    header: `|;;|ID|Grupp|Ordning|Skapadav|Skapadavtid|Redigeradav|Redigeradavtid||$$|`,
  },
  instruktioner: {
    file: "instruktioner",
    header: `|;;|InstrID|Benaemning|Dokument|Instruktion||$$|`,
  },
  jobbpaminnelser: {
    file: "jobbpaminnelser",
    header: `|;;|ID|FirmaID|Aktiv|Tid|Mail|SMS|Skapadav|Skapadavtid|Redigeradav|Redigeradavtid||$$|`,
  },
  journal: {
    file: "journal",
    header: `|;;|JournalID|MaskinID|Benaemning|Intervall|Enhet|Tidpunkt|PlaneringsMaan|InstruktionsID|Personal|BeraeknadTidsaatgaang|Status|FaerdigTid|Stillestaandstid|Reparationstid|ProduktionsTapp|Kommentar|Andra|UnderhaallsID|num1|num2|num3|text1|text2|orsak|projekt|ordertyp|Arkiveringskod|Belastas|Arkiveras|FaktDatum|FelaId|Antdok|SenAnd|AndAv|SkapadAv|SkapadTpk|AOtyp|Listmarke|ViktigOrder|DoljIattgora|Ansvarig|HantTidigare|Uhrond|Huvudonr|Memouhrond|Text3|Text4|Text5|JLLong01|JLLong02|JLLong03|JLStr01|JLStr02|JLStr03|JLDate01|JLDate02|JLDate03|JLTF01|JLTF02|JLTF03|Vikt|StartTid|SlutTid|KommentarExt|Print|Innan|Efter|Mejl|SMS|Kommentar3|Kommentar4|Last|OrderTypId|PName|Arbetsgrupp|Avdelning|Avdgrp1|Avdgrp2|MaskinBen|MaskinBild|TypTitel|AName|BName|KontaktID|Prioritet|Radnr||$$|`,
  },
  journalarkiv: {
    file: "journalarkiv",
    header: `|;;|JournalID|MaskinID|Benaemning|Intervall|Enhet|Tidpunkt|PlaneringsMaan|InstruktionsID|Personal|BeraeknadTidsaatgaang|Status|FaerdigTid|Stillestaandstid|Reparationstid|ProduktionsTapp|Kommentar|Andra|UnderhaallsID|num1|num2|num3|text1|text2|orsak|projekt|ordertyp|Arkiveringskod|Belastas|Arkiveras|FaktDatum|FelaId|Antdok|SenAnd|AndAv|SkapadAv|SkapadTpk|AOtyp|Listmarke|ViktigOrder|DoljIattgora|Ansvarig|HantTidigare|Uhrond|Huvudonr|Memouhrond|Text3|Text4|Text5|JLLong01|JLLong02|JLLong03|JLStr01|JLStr02|JournalArkiv.JLStr03|JLDate01|JLDate02|JLDate03|JLTF01|JLTF02|JLTF03|Vikt|StartTid|SlutTid|KommentarExt|Print|Innan|Efter|Mejl|SMS|Kommentar3|Kommentar4|Last|OrderTypId|JLStr03|PName|Arbetsgrupp|Avdelning|Avdgrp1|Avdgrp2|MaskinBen|MaskinBild|TypTitel|AName|BName|KontaktID|Radnr||$$|`,
  },
  journalarkiv_dok: {
    file: "journalarkiv_dok",
    header: `|;;|tabid|JournalID|Beskrivning|Dokument|Utskrift|Dokpath||$$|`,
  },
  journalposter: {
    file: "journalposter",
    header: `|;;|JournalPostId|JournalID|Benaemning|Antal|Pantal|Apris|Kostnader|Reservdelar|Kommentar|PApris|Pkostnader|Datum|utfoeresav|InloggadTid|UtloggadTid|JRLong01|JRLong02|JRLong03|JRStr01|JRStr02|JRStr03|JRDate01|JRDate02|JRDate03|JRTF01|JRTF02|JRTF03|ReservdelarExt|AntalExt|AprisExt|KostnaderExt|Rabatt|Paalaegg|Visa|SenAnd|AndAv|SkapadAv|SkapadTpk|Lagerplats|Lagerplats2|TypAvTransaktion|Bild1|Enhet|isReservdel|UName||$$|`,
  },
  journalposterarkiv: {
    file: "journalposterarkiv",
    header: `|;;|JournalPostId|JournalID|Benaemning|Antal|Pantal|Apris|Kostnader|Reservdelar|Kommentar|PApris|Pkostnader|Datum|utfoeresav|InloggadTid|UtloggadTid|JRLong01|JRLong02|JRLong03|JRStr01|JRStr02|JRStr03|JRDate01|JRDate02|JRDate03|JRTF01|JRTF02|JRTF03|ReservdelarExt|AntalExt|AprisExt|KostnaderExt|Rabatt|Paalaegg|Visa|SenAnd|AndAv|SkapadAv|SkapadTpk|Lagerplats|Lagerplats2|TypAvTransaktion|Bild1|Enhet|isReservdel|UName||$$|`,
  },
  journal_dok: {
    file: "journal_dok",
    header: `|;;|tabid|JournalID|Beskrivning|Dokument|Utskrift|Dokpath|Kopiera||$$|`,
  },
  losenord: {
    file: "losenord",
    header: `|;;|Anvaendare|LoesenOrd|Nivaa|AOform|Projekt|Matarstallning|Forrad|Vktavdelning|Persplan|Nyvalavmaskin|Visaautoplanuh|TabortAttgora|AntdagarAttgora|HistCopy|AntDagHist|OkMasstrans|OkIndividhan|OkInkop|OkflyMas|OkArkivera|OkBelaggning|OkDetAttGora|OkFaktList|OkoppnavaldaAo|OkVisaHist|OkhistFlyKop|OkAvdelning|OkAvdgrp1|OkAvdgrp2|SeResInd|SePlanuh|SeBestarAv|SeBetjanar|SeResStrukt|Administrator|Journalvariant|NySokMaskin|Arbetsorder|MenyAlt|AOejUtfore|Arbetsordertyp|AttGoraOffUts|AttGoraArkivorder|SuperAO|AOHamtatext|ExtFakt|AoViktigorder|AOiWord|kopAOjor|kopAOhis|AOkopArk|mkEnbartse|Historikvariant|Valfelanm|VisaDoljStatus|Flytmat|aoorsakalla|Uppdatering|masresAO|Aoinsats|tabortfela|uhrond|visahiststarsida|faltbreddjournal|faltbreddhistdet|faltbreddstart|faltbreddmaskinsok|faltbreddressok|histmaskao|flytuh|skapafuao|runtimemeny|egnaapp|helautoplanuh|stillestaand|skaparedigeramaskiner|specialhist|utskriftstartsida|sokjournalhist|foljdao|websnabbtext|webdoc|websignrita|webfelasms|webfelamail|webfelakort|websign|webkortao|webfela|webreservdel|webfelaredigera|webAO|webAOny|webqrcode|Webepisod|Webprivat|WebMaskinskapa|Webreservdelarskapa|Webkontaktskapa|paminnelseao|smajobbstartsida|EK_KPA|EK_AB|EK_insatser|EK_maskinkort|ek_maskinoversikt|EK_visadetalj|EK_sok|EK_Fela|EK_Felaskapaao|EK_Spara|EK_orsak|EK_Filter|minahandelser|visaresstrukt|veckoplanerare|planuhgranskare|stampainao|bokainaoautomatiskt|EF_detalj|EF_delaultlage|enkelfela|EF_valjanm|EF_sok|EF_Orsak|EF_Datum|EF_Lage|multilosenord|EK_skrivutao|EF_skrivutao|AntDagTot|dateSelectionTot|dateSelectionAttGora|dateSelectionHistorik|OkInkopVisaAllt|FrameAO|valattgora|Risk|lang|AttGoraKommentarer|ValjFelatyp||$$|`,
  },
  maskindokument: {
    file: "maskindokument",
    header: `|;;|MaskinDocID|MaskinID|MaskinDoc|Kommentar||$$|`,
  },
  maskiner: {
    file: "maskiner",
    header: `|;;|MaskinID|Avdelning|Avdgrp1|Avdgrp2|Benaemning|MaskinTyp|ModellBeteckning|SerieNummer|TillverkningsAAr|Leverantoer|ServiceAvtal|ServicePartner|Kontakt3|Kontakt4|Kommentar|Text1|Text2|Text3|Text4|Text5|Text6|Text7|Text8|Text9|Text10|IngaarI|Posnr|OLE1|OLE2|OLE3|OLE4|Bild1|Bild2|Skapadav|Skapadavtid|Redigeradav|Redigeradavtid|MRLong01|MRLong02|MRLong03|MRStr01|MRStr02|MRStr03|MRDate01|MRDate02|MRDate03|MRTF01|MRTF02|MRTF03|Vikt|Risk|Statistik|LeverantoerName|ServicePartnerName|Kontakt3Name|Kontakt4Name|MaskinBild||$$|`,
  },
  maskinplacering: {
    file: "maskinplacering",
    header: `|;;|ID|Typ|TypID|onBild|toBild|Form|Points|Color|PlaceringText|Stil|ZIndex|Skapadav|Skapadavtid|Redigeradav|Redigeradavtid||$$|`,
  },
  maskinplaceringbilder: {
    file: "maskinplaceringbilder",
    header: `|;;|ID|Dokpath|Beskrivning||$$|`,
  },
  maskinstruk: {
    file: "maskinstruk",
    header: `|;;|MaskinId1|MaskinId2|Prioritet|Beskrivning|Dokument|Dokument2|Dokument3|Dokument4|Dokument5|Text1|Text2|Text3|Text4|Text5|ID||$$|`,
  },
  notifieringar: {
    file: "notifieringar",
    header: `|;;|ID|AID|Typ|Titel|Kommentar|Sedd|SeddTid|Kvitterad|KvitteradTid|Mail|SMS|Mottagare|Skapadav|Skapadavtid|Redigeradav|Redigeradavtid|NStr01|Nstr02|Nstr03|NLong01|NLong02|NLong03|Ndate01|Ndate02|Ndate03|NTF01|NTF02|NTF03|SkapadavNamn|SkapadavBild|MottagareNamn|MottagareBild||$$|`,
  },
  notifieringar_dok: {
    file: "notifieringar_dok",
    header: `|;;|tabid|ID|Beskrivning|Dokument|Utskrift|Dokpath|Kopiera||$$|`,
  },
  orsak: {
    file: "orsak",
    header: `|;;|Orsak|Beskrivning|Arbetsgrupp|Skapadav|Skapadavtid|Redigeradav|Redigeradavtid||$$|`,
  },
  paminnelse: {
    file: "paminnelse",
    header: `|;;|id|journalid|pamin|tidpunkt|kommentar|OK|SMS|Mail|avdelning|uhavh|antdagar|uhid|Mall|mallutf|fela|eskalering|antaldagaresk|antalggresk|nuvarandeantalesk|lanktext|lank|Skickad||$$|`,
  },
  parametrar: {
    file: "parametrar",
    header: `|;;|ParameterId|Parameter|Sant1|Sant2|Text1|Text2|Tal1|Tal2|Datum1|Datum2|DoljIattgora||$$|`,
  },
  passwordauthor: {
    file: "passwordauthor",
    header: `|;;|FirmaID|Firmanamn|Kod|Giltig||$$|`,
  },
  planeratunderhaall: {
    file: "planeratunderhaall",
    header: `|;;|UnderhaallsID|MaskinID|Benaemning|Intervall|Enhet|Tidpunkt|PlaneringsMaan|InstruktionsID|Personal|BeraeknadTidsaatgaang|VerklMatarst|AvTidpkt|AccValue|SkapaAO|Arkiveringskod|Belastas|Kommentar|Andra|Antdok|Ansvarig|Uhrond|Orsak|Status|projekt|Aktiv|Skapadav|Skapadavtid|Redigeradav|Redigeradavtid|PLLong01|PLLong02|PLLong03|PLStr01|PLStr02|PLStr03|PLDate01|PLDate02|PLDate03|PLTF01|PLTF02|PLTF03|Vikt|MaskinBen|MaskinTyp|Avdelning|Avdgrp1|Avdgrp2|PName|AName||$$|`,
  },
  planeratunderhaallposter: {
    file: "planeratunderhaallposter",
    header: `|;;|PlanuhpostId|UnderhaallsID|Benaemning|Antal|Pantal|Apris|Kostnader|Reservdelar|Kommentar|PRLong01|PRLong02|PRLong03|PRStr01|PRStr02|PRStr03|PRDate01|PRDate02|PRDate03|PRTF01|PRTF02|PRTF03|Skapadav|Skapadavtid|Redigeradav|Redigeradavtid|Bild1|Enhet|isReservdel||$$|`,
  },
  planuh_dok: {
    file: "planuh_dok",
    header: `|;;|tabid|UnderhaallsID|Beskrivning|Dokument|Utskrift|Dokpath|Original||$$|`,
  },
  prioriteringar: {
    file: "prioriteringar",
    header: `|;;|Prio|Beskrivning|VM|VA|VU|Color||$$|`,
  },
  projekt: {
    file: "projekt",
    header: `|;;|Projektnamn|Beskrivning|Huvudorsak|Projbesk|ProjStart|PlanFardDat|VerklFardDat|BerKostn|Projektledare|Projekttyp|AtgardsBesk|Skapadav|Skapadavtid|Redigeradav|Redigeradavtid|PTLong01|PTLong02|PTLong03|PTStr01|PTStr02|PTStr03|PTDate01|PTDate02|PTDate03|PTTF01|PTTF02|PTTF03||$$|`,
  },
  reservdelsdokument: {
    file: "reservdelsdokument",
    header: `|;;|ReservdelsDocID|ReservdelsID|ReservdelsDoc|Kommentar||$$|`,
  },
  reservdelsinfo: {
    file: "reservdelsinfo",
    header: `|;;|ReservdelsID|LevResID|Lagerplats|Lagerplats2|Benaemning|LeverantoersID|MinLagerNivaa|Enhet|Leveranstid|Lagersaldo|PrisPerEnhet|Text1|Text2|Konto|Individ|Reservdelstyp|aGrupp|aTyp|Standardinkop|Text3|Text4|Text5|Text6|Text7|Text8|Text9|Text10|Kommentar|Bild1|Bild2|Skapadav|Skapadavtid|Redigeradav|Redigeradavtid|RRLong01|RRLong02|RRLong03|RRStr01|RRStr02|RRStr03|RRDate01|RRDate02|RRDate03|RRTF01|RRTF02|RRTF03|IngaarI|Fabrikat|Lager|Lagervarde|Leverantoer|AttBest||$$|`,
  },
  reservdelsstruktur: {
    file: "reservdelsstruktur",
    header: `|;;|PostID|ReservdelsID|MaskinID|Inkoepsdatum|Inkoepspris|Antal|Kommentar|Skapadav|Skapadavtid|Redigeradav|Redigeradavtid|ResBenaemning|ResBild|MaskinBenaemning|MaskinBild|PrisPerEnhet|Lagersaldo||$$|`,
  },
  restransaktioner: {
    file: "restransaktioner",
    header: `|;;|ReservdelsID|JournalID|Tidpunkt|Benaemning|Kommentar|antal|pantal|kostnader|MaskinID|MaskinBen|FirmaNamn|Historik|SenAnd|TypTitel|JournalPostId||$$|`,
  },
  risker: {
    file: "risker",
    header: `|;;|ID|Risk|Ikon|Typ|MaskinID|Beskrivning|Ordning||$$|`,
  },
  ronder: {
    file: "ronder",
    header: `|;;|ID|Namn|Beskrivning|MaskinId|Radnr|Intervall|Enhet|Vecka|Baserad|Skapadav|Skapadavtid|Redigeradav|Redigeradavtid|antalRader||$$|`,
  },
  rondrader: {
    file: "rondrader",
    header: `|;;|ID|RondId|Radnr|Maskin|Beskrivning|Anm|SkapaAO|UDLong01|UDLong02|UDLong03|UDStr01|UDStr02|UDStr03|UDDate01|UDDate02|UDDate03|UDTF01|UDTF02|UDTF03|Baserad|Radtyp|Bild|Avdelning|RadMaskinBen||$$|`,
  },
  sensoraktivtider: {
    file: "sensoraktivtider",
    header: `|;;|ID|SensorID|MaskinID|Tidpunkt|Aktiv|Skapadav|Skapadavtid|Redigeradav|Redigeradavtid||$$|`,
  },
  sensorregister: {
    file: "sensorregister",
    header: `|;;|SensorID|Benaemning|SensorMAC|MaskinID|MinMinuter|MaxMinuter|Aktiv|Tolerans|AutoStart|Overvakning|SenastStoppTid|MinTemperatur|MaxTemperatur|Kontakt|StopptidSkapaAO|StopptidSkapaFela|MailStoppStart|MailStoppSlut|Skapadav|Skapadavtid|Redigeradav|Redigeradavtid|Avdelning|Avdgrp1|Avdgrp2|MaskinBen|MaskinBild|startTime|SenastStartStoppTid|SenastStoppTidInaktivSlut||$$|`,
  },
  snabbtext: {
    file: "snabbtext",
    header: `|;;|ID|Text1|Skapadav|Skapadavtid|Redigeradav|Redigeradavtid||$$|`,
  },
  status: {
    file: "status",
    header: `|;;|ID|Text1|DoljIattgora|Skapadav|Skapadavtid|Redigeradav|Redigeradavtid||$$|`,
  },
  stopptider: {
    file: "stopptider",
    header: `|;;|ID|MaskinID|StoppStartTid|StoppSlutTid|Kommentar|Orsak|SensorID|AktivStopptid|Skapadav|Skapadavtid|Redigeradav|Redigeradavtid|SecondaryID|StoppMaskinID|SensorBenaemning|Avdelning|Avdgrp1|Avdgrp2|MaskinBen|MaskinBild||$$|`,
  },
  typ: {
    file: "typ",
    header: `|;;|Typ||$$|`,
  },
  uhrond: {
    file: "uhrond",
    header: `|;;|RondId|Radnr|Maskin|Beskrivning|Anm|SkapaAO|JournalID|UJournalID|Utfoeres_av|Tidpunkt|Klar|Namn|Expr1012|UDLong01|UDStr01|UDStr02|UDStr03|ID|UDTF01|Radtyp|Bild|Verifierad|MaskinID|SenAnd|Arkiv|ordertyp|MaskinBen|SkapadTpk|Bild1|MRTF01|Avdelning|RadMaskinBen|Huvudonr|UnderhaallsID||$$|`,
  },
  userarkivkod: {
    file: "userarkivkod",
    header: `|;;|Arkiveringskod|Anvaendare||$$|`,
  },
  utskriftsrapporter: {
    file: "utskriftsrapporter",
    header: `|;;|ID|Rapport|DataTabell|UtskriftTabell|UtskriftsID|Grupp|Poster|Formular|Parameternamn|Rapportnamn||$$|`,
  },
  valutaregister: {
    file: "valutaregister",
    header: `|;;|Valuta|Benaemning|Kurs||$$|`,
  },
};
