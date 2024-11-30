import CPLogo from '/public/Logo CP.svg';
import {useEffect, useState} from "react";
import StarPrize from '/public/star-prize.svg';

export const CP = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const target: Date = new Date('2024-12-31T23:59:59'); // Example only


    useEffect(() => {
        document.title = "Arkavidia 8.0 | Competitive Programming";
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            const now: Date = new Date();
            const diff: number = target.getTime() - now.getTime();

            if (diff > 0) {
                setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
                setHours(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                setMinutes(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
                setSeconds(Math.floor((diff % (1000 * 60)) / 1000));
            } else {
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
            }
        }, 1000);

        return () => clearInterval(interval);
    })

  return (
    <div className="flex flex-col h-[200vh] gap-0">
        <section className="flex flex-col gap-0 mt-24 justify-center items-center py-24" id="about">
            <img src={CPLogo} alt="Logo CP" className="w-64"/>
            <div className="bg-white p-4 w-2/5 flex flex-col items-center gap-5 md:w-3/5 sm:w-4/5">
                <h3 className="text-4xl text-center">Competitive Programming</h3>
                <p className="text-center">
                    Competitive Programming adalah kompetisi yang menguji kemampuan analisis para peserta dalam pemecahan masalah dan berpikir komputasional dengan menyelesaikan persoalan - persoalan yang diberikan dengan menggunakan bahasa pemrograman tertentu dan tidak melanggar batasan waktu dan memori yang ditentukan. Kompetisi ini ditujukan untuk Mahasiswa S1/D3/D4 se-Indonesia.
                </p>
                <div className="flex flex-row justify-around gap-8">
                    <button className="border-blue-800 border-4 p-4 rounded-xl transition-colors hover:border-blue-700">
                        <a href="/guidebook" className="text-blue-800">Download Guidebook</a>
                    </button>
                    <button className="bg-blue-800 border-4 p-4 rounded-xl border-blue-800 transition-colors hover:bg-blue-700 hover:border-blue-700">
                        <a href="/register" className="text-white">Register Now</a>
                    </button>
                </div>
            </div>
        </section>

        <section className="" id="registration-time">
            <div className="bg-white text-center font-bold text-xl py-1">
                OPEN REGISTRATION OPEN REGISTRATION OPEN REGISTRATION
            </div>
            <div className="bg-black flex flex-row justify-center items-center gap-10 py-12"> {/* Time wrapper */}
                <div className="flex flex-col gap-2 items-center"> {/* Day */}
                    <div className="flex flex-row gap-3"> {/* Day countdown */}
                        <div
                            className="bg-white text-black px-6 py-8 text-xl font-bold rounded-xl">{Math.floor(days / 10)}</div>
                        <div className="bg-white text-black px-6 py-8 text-xl font-bold rounded-xl">{days % 10}</div>
                    </div>
                    <div className="text-white font-bold">Days</div>
                </div>
                <div className="flex flex-col gap-2 items-center"> {/* Hours */}
                    <div className="flex flex-row gap-3"> {/* hours countdown */}
                        <div
                            className="bg-white text-black px-6 py-8 text-xl font-bold rounded-xl">{Math.floor(hours / 10)}</div>
                        <div className="bg-white text-black px-6 py-8 text-xl font-bold rounded-xl">{hours % 10}</div>
                    </div>
                    <div className="text-white font-bold">Hours</div>
                </div>
                <div className="flex flex-col gap-2 items-center"> {/* Minutes */}
                    <div className="flex flex-row gap-3"> {/* Minutes countdown */}
                        <div className="bg-white text-black px-6 py-8 text-xl font-bold rounded-xl">{Math.floor(minutes / 10)}</div>
                        <div className="bg-white text-black px-6 py-8 text-xl font-bold rounded-xl">{minutes % 10}</div>
                    </div>
                    <div className="text-white font-bold">Minutes</div>
                </div>
                <div className="flex flex-col gap-2 items-center"> {/* Seconds */}
                    <div className="flex flex-row gap-3"> {/* Seconds countdown */}
                        <div className="bg-white text-black px-6 py-8 text-xl font-bold rounded-xl">{Math.floor(seconds / 10)}</div>
                        <div className="bg-white text-black px-6 py-8 text-xl font-bold rounded-xl">{seconds % 10}</div>
                    </div>
                    <div className="text-white font-bold">Seconds</div>
                </div>
            </div>
        </section>

        <section className="flex flex-col justify-center bg-blue-900 py-6" id="prize">
            <h1 className="text-center text-white font-extrabold text-6xl">PRIZE</h1>
            <div className="flex flex-row gap-5 justify-between">
                <img src={StarPrize} alt="Star Prize" className="h-32 md:hidden sm:hidden"/>
                <div className="flex flex-col gap-3">
                    <div>
                        <h3 className="text-white text-2xl font-bold">Juara 1</h3>
                        <p className="text-white text-4xl font-bold">Rp 7.000.000</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
