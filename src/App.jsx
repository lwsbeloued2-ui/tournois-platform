import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export default function EventRegistrationPlatform() {

  const [players, setPlayers] = useState(Array(13).fill(""));
  const [phone, setPhone] = useState("");
  const [club, setClub] = useState("");

  const handlePlayerChange = (index, value) => {
    const updatedPlayers = [...players];
    updatedPlayers[index] = value;
    setPlayers(updatedPlayers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "players"), {
        players,
        phone,
        club,
        createdAt: new Date(),
      });

      alert("تم التسجيل بنجاح 🎉");

      setPlayers(Array(13).fill(""));
      setPhone("");
      setClub("");

    } catch (error) {
      console.error(error);
      alert("حدث خطأ");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
           الدورة الافتتاحية- منصة تسجيل الثلاثيات
          </h1>

          <p className="text-gray-500 text-lg">
       سجل ثلاثيتك للمشاركة في الدورة
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {[...Array(13)].map((_, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                اسم قائد الثلاثية - {index + 1}
              </label>

              <input
                type="text"
                value={players[index]}
                onChange={(e) =>
                  handlePlayerChange(index, e.target.value)
                }
                placeholder="أدخل الاسم كاملا"
                className="w-full p-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              رقم الهاتف
            </label>

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="0000 00 00 00"
              className="w-full p-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              النادي
            </label>

            <select
              value={club}
              onChange={(e) => setClub(e.target.value)}
              className="w-full p-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option>اختر النادي</option>
              <option>AZ sport</option>
              <option>CLUB SPORTIF AMATEUR AMAL GHAMRA</option>
              <option>CLUB SPORTIF AMATEUR PETANQUE GUEMAR</option>
              <option>CLUB SPORTIF AMATEUR ETTEHADI</option>
              <option>CLUB SPORTIF AMAL KOUININE</option>
              <option>CLUB SPORTIF OLYMPIQUE TOUAM</option>
              <option>CLUB SPORTIF AMATEUR MECHAAL CHOUHADA</option>
              <option>CLUB WEDAD ROBBAH PETANQUE</option>
              <option>CLUB SPORTIF AMATEUR ETOILES MIH OUENSSA</option>
              <option>NADI RIADI BALADIA OURMES</option>
              <option>I.R.B.R</option>
              <option>CLUB SPORTIF DE L'UNIVERSIT D'EL OUED</option>
              <option>CLUB SPORTIF BELLE VUE</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition"
          >
            تسجيل الآن
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-400">
          © 2026 منصة تنظيم المنافسات
        </div>

      </div>
    </div>
  );
}