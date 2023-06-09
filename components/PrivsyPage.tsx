"usr client";
function PrivsyPage() {
    return (
        <div className="max-w-7xl mx-auto flex text-slate-50">
            <div    className="mx-5 px-4 rounded-lg py-8 mb-10 drop-shadow-xl bg-[url('https://cdn.pixabay.com/photo/2018/06/01/09/35/dsgvo-3446010_1280.png')]  bg-cover brightness-50 ">
                <h1 className="text-3xl py-6 text-[#ffbf00] ">Datenschutzerklärung für Kontaktformular :</h1>
                <h3 className="text-xl px-3 py-3">Die SYR Services nimmt den Schutz Ihrer personenbezogenen Daten sehr ernst. In dieser Datenschutzerklärung möchten wir Sie darüber informieren, welche Daten wir im Rahmen der Nutzung unseres Kontaktformulars erheben, wie wir sie verarbeiten und welche Rechte Sie in Bezug auf Ihre Daten haben.</h3>
                <div className="flex flex-col py-4 ">
                   <div className="space-y-5">
                   <li className=" text-[#ffbf00]">Verantwortlicher</li>
                    <p className="px-4">Verantwortlicher im Sinne der Datenschutzgrundverordnung (DSGVO) ist:</p>
                    <p className="flex flex-col px-4 ">
                        <span>SYR Services </span>
                        <span>Musterstraße 1</span>
                        <span> 12345 Musterstadt</span>
                        <span className="">Deutschland</span>
                        <span>E-Mail: info@syrservices.com</span>
                        <span>Telefon: 01234/567890</span>
                   </p>
                   </div>
                   <div className="space-y-5 py-5 ">
                   <li className="text-[#ffbf00] ">Zweck und Rechtsgrundlage der Datenverarbeitung</li>
                    <p className="px-4">Wir verarbeiten die von Ihnen im Kontaktformular angegebenen personenbezogenen Daten ausschließlich zum Zweck der Bearbeitung Ihrer Anfrage. Die Datenverarbeitung erfolgt aufgrund Ihrer freiwilligen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.</p>
                   </div>
                     <div className="space-y-5 py-5">
                     <li className="text-[#ffbf00] ">Erhebung und Verarbeitung von Daten</li>
                     <p className=" px-4">Im Rahmen der Nutzung unseres Kontaktformulars erheben wir folgende personenbezogene Daten:</p>
                     <ul className="flex flex-col text-[#ffbf00]/60 px-12 list-disc">
                        <li>Name</li>
                        <li>Email-Adresse</li>
                        <li>Betreff der Anfrage</li>
                        <li>Nachrichtentext</li>   
                   </ul>
                   </div>
                     <div className="space-y-5">
                        <li className="text-[#ffbf00] ">Kontakt</li>
                        <p className="px-4">Wenn Sie Fragen oder Bedenken bezüglich des Datenschutzes haben oder eines Ihrer Rechte ausüben möchten, können Sie uns unter den oben genannten Kontaktdaten erreichen.</p>
                     </div>

                    
                </div>
                <hr className="border border-[#ffbf00] my-7 opacity-60  " />
                <h1 className="py-6 pb-10 text-[#ffbf00]/70">Wir freuen uns über Ihr Interesse an unserem Kontaktformular und legen großen Wert auf den Schutz Ihrer personenbezogenen Daten.</h1>
            </div>
        </div>
    )
}

export default PrivsyPage;