import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export default function EventRegistrationPlatform() {

  const clubsData = {

    "AZ sport": {
      code: "AZ965",
      players: [
        "AZZAOUI LARBI",
"BARIKA	LAMINE",
"BECHI	ABDALLAH",
"BEN AMOR ABDERREZZAK",
"BEN AMOR  FARID",
"BOUSSADIA OUALID",
"BOUTERA OMAR",
"BOUTERA OUBAIDA",
"GHEDEIR AMAR HACEN",
"GHEDEIR EL AKHDAR",
"GHERBI	ALI",
"HAMIDI	MOHAMED",
"HAMIDI	SOUHAIB",
"HECHIFA LARBI",
"HOMMADI DJAMEL ADIB",
"KOATHAL HOCHIE",
"LOUACHI MOHAMMED ZAHRANE",
"SAD LAIB ABDERRAOUF",
"TOUAHRIA ABDFRRAHMANE EL BACHIR",
"TOUATI	SACI",
"ZID EL HABIB ABAELKACEM"
        
      ]
    },

    "CLUB SPORTIF AMATEUR AMAL GHAMRA": {
      code: "GH497",
      players: [
        "BADAR BARIR",
"BEKKARI BOUBAKER SAIF ALLAH",
"BERIBECHE AHMED",
"BOUROGA MOHAMMED LARBI",
"DELIBA DJAMEL",
"FETOURI ABDELHAMID",
"FETOURI MOHAMMED RAFIK",
"GHENNAI AYOUB",
"GHENNAI IMAD",
"GHENNAI YOUCEF",
"GUERDA MOHAMED EL AMIN",
"KERTKIOU ABDEDJABBAR",
"KHICHA LOTFI",
"KHICHA MILOUD",
"MERAGHNI BACHIR",
"MESBAHI HAROUNE",
"MESBAHI SOFIANE",
"MILOUD HASSOUNA",
"SAADA AZZEDDINE",
"SENIGRA ABDENNOUR",
"SOUID NADHIR",
"SOUID ZAKI"
      ]
    },

    "CLUB SPORTIF AMATEUR PETANQUE GUEMAR": {
      code: "PG776",
      players: [
        "ARBIA ABDELAZIZ",
"ARBIA ILIAS",
"AYATI AHMED",
"BANNI AHMED CHAOUKI",
"BANNI BRAHIM",
"BANNI ZIAD ABDELHAI",
"BEDOUI ABDELLAZIZ",
"BOUDJELKHA ABOU DHAR",
"BOUDJELKHA MOHAMMED KAMEL",
"BOUDJELKHA MOHAMMED LAID",
"BOUDJELKHA RIYAD",
"BOUDJELKHA YASSER",
"DEGHMA ISSAM",
"DIF ABDELKADER",
"FOUROU ABDALLAH",
"HADIDA MESSAOUD",
"HASSOUNA DJAMEL EDDINE",
"HIMA DJILANI",
"KECHIDA SADOK",
"KHESSIBA ZAKARIA",
"LECHELAH AHMED FAOUZI",
"LELLAH ABDENNACER",
"LEMHANNET SALEH",
"LEMMADI TOUFIK",
"MEDILEH MAJDI",
"MEHELLOU ABDENNOUR",
"MEHELLOU BRAHIM",
"MESBAHI SALIM",
"REDJIL ALI",
"SADALLAH DJAMEL EDDINE",
"SADANI OUAIL",
"SAOUD IBRAHIM",
"SEGHIAR TOUFIK ZINE ALABIDINE",
"TERMAMOU MAHMOUD",
"YEDJOUR MAHFOUDH DHIA EDDINE"
      ]
    },

    "CLUB SPORTIF AMATEUR ETTEHADI": {
      code: "ET814",
      players: [
        "ABBASSI KHALED",
"AICHOUCHE SAD",
"BEN AMOR ABDERRAHMANE",
"BEN AMOR AMARA",
"BEN AMOR BACHIR",
"BEN AMOR LAMINE",
"BENKHALFA SID AHMED",
"BOUKHEFARDJI ABDELDJALIL",
"BOUREZAK ABDESSELAM",
"BRAHIMI OMAR",
"GHALI FAROUK",
"GHERBI HICHAM",
"GHERBI NABIL",
"GHERSI RAMDANE",
"GUETAL EL HASSAN",
"HARIZ ABDELKADER RIDA",
"HARIZ BELKACEM HAITHAM",
"KEMIHA LOUKMANE",
"KHEDIM SOUFYANE",
"LALAOUI MOURAD",
"MAHROUG MOHAMED",
"MEHDI SOFIAN",
"MENEMECHE MOHAMED",
"NEGHMOUCHE ALI DJAFER",
"OUAGHLISSI MOHAMED FAYCAL",
"OUHAB KAMEL",
"REKAI OMAR",
"SADI MOKHTAR",
"SEKHRI MEROUANE",
"ZERROUKI SEDDIK"
      ]
    },

    "CLUB SPORTIF AMAL KOUININE": {
      code: "AK086",
      players: [
        "BENNECIB KHALED",
"GHERIEB HOUSSAM",
"GHEZOULA MOHAMMED HAITHAM",
"LAMOUDI MOHAMMED",
"LAMOUDI REDHOUANE",
"MANSOURI AHMED",
"NID OUALID",
"TOUAHRIA ABDESETTAR"
      ]
    },

    "CLUB SPORTIF OLYMPIQUE TOUAM": {
      code: "OT549",
      players: [
        "AMMARI ABD ELRAHMANE",
"AMMARI MESSOUD",
"ATTIA KHALIFA",
"ATTIA LAKHDER",
"BECHI AISSA",
"BECHI ALI",
"BECHI BACHIR",
"BECHI LAKHDAR",
"BECHI NOU ELDINE",
"BECHI TAHER",
"BEN HAMDA EL BACHIR",
"BEN HAMDA HAMZA",
"BEN HAMDA TAHAR",
"BENOUAN MOHAMED",
"BRAHIMI ABDELRAHMEN",
"BRAHIMI LAID",
"BRAHIMI MABROUK",
"CHEBANI NOUR EL-DINE",
"DIFALLAH AHMED",
"DIF ALLAH MOHMED",
"DIFALLAH SAAD",
"DIF EALLAH ABDELAZIZ"
      ]
    },

    "CLUB SPORTIF AMATEUR MECHAAL CHOUHADA": {
      code: "MC852",
      players: [
       "ATTIA MOHAMMED TAHAR",
"BABA ABDENNOUR",
"BABA DHIA",
"BABA FAOUZI",
"BABA MOKHTAR",
"BECHI FAWZI",
"BECHI HASSENE",
"BEN AMOR HAMZA",
"BEN AMOR TAREK",
"BEN SAADIA ALI",
"BRAHIMI CHOUAIB",
"CHEKEMBOU CHEMESEDDINE",
"DIDI ABDELAZIZ",
"DJERMOUN SMAIL",
"GECHAB ABDELLAZIZ",
"GHENBAZI ABDERRAOUF",
"GHENNAMI MOHAMMED TAHAR",
"GHREBI HOCINE",
"GHRIB MOHAMMED",
"HECHIFA ABDELKADER",
"HOMMADI SACI RAMZEDDINE",
"KERMADI ANOUAR",
"KHIARI BRAHIM",
"KOATHAL SALIM",
"KORNI MOHAMMED",
"MADJIDI ABDELKERIM",
"MANSOUR HATEM",
"MAOUCHE AHMED TEDJANI",
"MOUSSAOUI LAID",
"SEBBAK MOHAMMED ANOUAR",
"TEI ABDELMOAEZ",
"ZEKKOUR FERHAT RIDHA"
      ]
    },

    "CLUB WEDAD ROBBAH PETANQUE": {
      code: "WR963",
      players: [
       "ACHOUR FATHI",
"AOUINE FAROUK",
"ATIA BRAHIM",
"ATIK NACER RAFAA",
"ATTIA BADER EDDINE",
"BELMESSAOUD MOHAMMED CHAKER",
"GATTAOUI SALIM",
"GHEDEIR BRAHIM MOHAMMED",
"GHEDEIR BRAHIM TAHAR",
"GHENENNA MANSOUR",
"HANOUTI ADEL",
"HECHIFA ABDELKADER",
"KINA NACER EDDINE",
"REHOUMA ALI"
      ]
    },

    "CLUB SPORTIF AMATEUR ETOILES MIH OUENSSA": {
      code: "EM159",
      players: [
       "AMMARI ALI",
"AMMARI BRAHIM",
"AMMARI MOHAMMED",
"BECHI ABDLBASEET",
"BOUCHALA ABDELKADER",
"BOUDIENA ABDELKAMEL",
"BRAHIMI DJILANI",
"ECHI ABDELHAKIM",
"GEDEIR AMAR ABDENNACER",
"GHEDEIR AHMED ALI",
"GHEDEIRAHMED HOCINE",
"GHEDEIR AMOR ADEM",
"GHEDER AMAR LAID",
"GHREBI ABDELKRIM",
"GHREBI MAATOUG",
"MANSOURI HICHAM",
"ZEKKOUR FERHAT KHALIL",
"ZOUARI AHMED ZAIED",
"بوغزالة محمد صالح",
"خليفة قطاوي",
"محمد بديدة"
      ]
    },

    "NADI RIADI BALADIA OURMES": {
      code: "BO357",
      players: [
        "ABBASI LARBI",
"BELLAMOUCHI MONCEF",
"BELLAMOUCHI SADDEM HOCINE",
"DRIDI ABDELKRIM",
"MAAMOUN SALIM",
"MEDJOUR MOHAMMED SALAH",
"MERABET MOHAMMED EL HABIB",
"RAHAL MONCEF",
"SAADANE MOURAD",
"SAADANE YASSINE",
"TEDJINI FARES",
"ZERROUD ALI",
"ZERROUD IBRAHIM"
      ]
    },

    "I.R.B.R": {
      code: "IR258",
      players: [
        "BABA ABDELALI",
"CHEGGOUR ABDELKADER",
"CHEGGOUR BRAHIM",
"CHEGGOUR HOUCINE",
"DIFALLAH MESSAOUD",
"DJABALLAH ABDESSAMIA",
"DJABALLAH ALA EDDINE",
"DJABALLAH BAKKAR",
"DJABALLAH FAHI",
"DJABALLAH HATEM",
"DJABALLAH SIDI ALI",
"DJABALLAH TABET",
"GHERIBI YACINE",
"SAD ATIG ZID",
"TOUANSA ABDELKAFI",
"TOUANSA ALI",
"TOUANSA DIF",
"TOUANSA HOCINE",
"TOUNSI ABDELHAK",
"العايش سلاطنه",
"صلاح عزوز",
"عبد الطيف جاب الله",
"محمد الامين بابه",
"محمد العيد عاشور"
      ]
    },

    "CLUB SPORTIF DE L'UNIVERSIT D'EL OUED": {
      code: "UE147",
      players: [
        "BEN HACINE DJILANI",
"BOUHNIK BRAHIM MOHAMMED FADIL",
"MAHBOUB KHAZZANI",
"MILOUDI KHALED",
"SELMANE MEHDI",
"TOUMI RIADH",
"ZEGHIDI OUSSAMA",
"ZINE ABDERRAHMANE"
      ]
    },

    "CLUB SPORTIF BELLE VUE": {
      code: "BV365",
      players: [
        "AHMADI OUSSAMA",
"CHELALGA YOUCEF",
"CHETEHOUNA DJAMEL EDDINE",
"HABITA HADJ MOSTEFA",
"HIDOUCI AMMAR",
"NINOUH ALA EDDINE"
      ]
    }

  };
  const [club, setClub] = useState("");
  const [secretCode, setSecretCode] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  const [triplets, setTriplets] = useState([]);

  const [phone, setPhone] = useState("");

  // اختيار النادي
  const handleClubChange = (selectedClub) => {

    setClub(selectedClub);
    setSecretCode("");
    setIsAuthorized(false);

    if (selectedClub) {

      const totalTriplets =
        Math.floor(
          clubsData[selectedClub].players.length / 3
        );

      const emptyTriplets = Array(totalTriplets)
        .fill()
        .map(() => ["", "", ""]);

      setTriplets(emptyTriplets);
    }
  };

  // التحقق من الكود
  const checkCode = (value) => {

    setSecretCode(value);

    if (
      club &&
      value === clubsData[club].code
    ) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  };

  // تغيير اللاعبين
  const handlePlayerChange = (
    tripletIndex,
    playerIndex,
    value
  ) => {

    const updatedTriplets = [...triplets];

    updatedTriplets[tripletIndex][playerIndex] = value;

    setTriplets(updatedTriplets);
  };

  // الحفظ
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
const validTriplets = triplets.filter(
  (triplet) =>
    triplet[0] !== "" &&
    triplet[1] !== "" &&
    triplet[2] !== ""
);

if (validTriplets.length === 0) {
  alert("يجب إدخال ثلاثية مكتملة واحدة على الأقل");
  return;
}
      await addDoc(collection(db, "players"), {

        club,
        phone,
        triplets: validTriplets,
        createdAt: new Date(),

      });

      alert("تم التسجيل بنجاح 🎉");

    } catch (error) {

      console.error(error);
      alert("حدث خطأ");

    }
  };

  // عدد الثلاثيات
  const tripletsCount =
    club
      ? Math.floor(
          clubsData[club].players.length / 3
        )
      : 0;
      return (

   <div
  style={{
  backgroundImage: "url('/desert.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100vw",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
}}

  style={{
    backgroundImage: "url('/desert.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

     <div
  style={{
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
border: "1px solid rgba(255,255,255,0.3)",
    color: "black",
    width: "100%",
    maxWidth: "600px",
    borderRadius: "25px",
    padding: "25px",
    boxShadow: "0 0 25px rgba(0,0,0,0.3)",
    margin: "0 auto",
    postion: "relative",
  }}
>
<img
  src="/logo.jpg"
  alt="logo"
  style={{
    width: "90px",
    position: "absolute",
    top: "20px",
    right: "20px"
  }}
/>
        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-gray-800 mb-2">
        
           منصة تسجيل الثلاثيات
          <br />
          Tournoi D'ouverture -2026
          </h1>

          <p style={{ fontWeight: "bold", color: "blue" }}>
         تسجيل
           <br />
           Inscription
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* النادي */}

          <div>

           <label
  style={{
    color: "black",
    fontWeight: "bold",
    fontSize: "20px",
    display: "block",
    marginBottom: "10px",
    textAlign: "center",
  }}
>
  النادي
  <br />
  Club
</label>

            <div className="flex gap-3">

              <select
                value={club}
                onChange={(e) =>
                  handleClubChange(e.target.value)
                }
                style={{
  width: "100%",
  padding: "16px",
  borderRadius: "20px",
  border: "1px solid rgba(255,255,255,0.35)",
  background: "rgba(255,255,255,0.12)",
  backdropFilter: "blur(10px)",
  color: "blue",
  fontSize: "18px",
  fontWeight: "bold",
  outline: "none",
  boxShadow: "0 0 20px rgba(0,140,255,0.25)",
}}
              >

                <option value="">
                  اختر النادي
                </option>

                {Object.keys(clubsData).map((clubName) => (

                  <option
                    key={clubName}
                    value={clubName}
                  >
                    {clubName}
                  </option>

                ))}

              </select>

              <input
                type="text"
                value={tripletsCount + " ثلاثية"}
                readOnly
                style={{
  width: "30%",
 display: "block",
margin: "0 auto",
  padding: "16px",
  borderRadius: "20px",
  border: "1px solid rgba(255,255,255,0.35)",
  background: "rgba(255,255,255,0.12)",
  backdropFilter: "blur(10px)",
  color: "blue",
  fontSize: "18px",
  fontWeight: "bold",
  outline: "none",
  boxShadow: "0 0 20px rgba(0,140,255,0.25)",
}}
              />

            </div>

          </div>

          {/* الكود */}

          <div>

            <label
  style={{
    color: "black",
    fontWeight: "bold",
    fontSize: "20px",
    display: "block",
    marginBottom: "10px",
    textAlign: "center",
  }}
>
  الكود السري
  <br />
  Key
</label>

            <input
              type="password"
              value={secretCode}
              onChange={(e) =>
                checkCode(e.target.value)
              }
              placeholder="أدخل الكود السري"
              style={{
  width: "30%",
  display: "block",
margin: "0 auto",
  padding: "16px",
  borderRadius: "20px",
  border: "1px solid rgba(255,255,255,0.35)",
  background: "rgba(255,255,255,0.12)",
  backdropFilter: "blur(10px)",
  color: "black",
  fontSize: "18px",
  fontWeight: "bold",
  outline: "none",
  boxShadow: "0 0 20px rgba(0,140,255,0.25)",
}}
            />

          </div>
          {/* الثلاثيات */}

          {isAuthorized && (

            <div className="space-y-6">

              {triplets.map((triplet, tripletIndex) => (

                <div
                  key={tripletIndex}
                  className="border p-5 rounded-2xl bg-gray-50"
                >

                  <h2 className="font-bold text-lg mb-4">
                    الثلاثية رقم {tripletIndex + 1}
                  </h2>

                  {[0, 1, 2].map((playerIndex) => (

                    <div
                      key={playerIndex}
                      className="mb-4"
                    >

                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        اللاعب {playerIndex + 1}
                      </label>

                      <select
                        value={triplet[playerIndex]}
                        onChange={(e) =>
                          handlePlayerChange(
                            tripletIndex,
                            playerIndex,
                            e.target.value
                          )
                        }
                        className="w-full p-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
                      >

                        <option value="">
                          اختر اللاعب
                        </option>

                        {clubsData[club].players
                          .filter((player) => {

                            const selectedPlayers =
                              triplets.flat();

                            return (
                              !selectedPlayers.includes(player) ||
                              triplet[playerIndex] === player
                            );
                          })
                          .map((player) => (

                            <option
                              key={player}
                              value={player}
                            >
                              {player}
                            </option>

                          ))}

                      </select>

                    </div>

                  ))}

                </div>

              ))}

            </div>

          )}
          {/* الهاتف */}

          <div>

            <label
  style={{
    color: "black",
    fontWeight: "bold",
    fontSize: "20px",
    display: "block",
    marginBottom: "10px",
    textAlign: "center",
  }}
>
              رقم الهاتف
            </label>

            <input
              type="tel"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              placeholder="0000 00 00 00"
              style={{
  width: "30%",
  display: "block",
margin: "0 auto",
  padding: "16px",
  borderRadius: "20px",
  border: "1px solid rgba(255,255,255,0.35)",
  background: "rgba(255,255,255,0.12)",
  backdropFilter: "blur(10px)",
  color: "black",
  fontSize: "18px",
  fontWeight: "bold",
  outline: "none",
  boxShadow: "0 0 20px rgba(0,140,255,0.25)",
}}
            />

          </div>

          <button
  type="submit"
  style={{
    width: "100%",
    padding: "18px",
    borderRadius: "20px",
    background: "#0077ff",
    color: "white",
    fontSize: "26px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    textAlign: "center",
    marginTop: "20px",
  }}
>
  تسجيل الآن
</button>

        </form>

      </div>

    </div>
  );
}
