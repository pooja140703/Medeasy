

//Dynamic medicine list creation with javascript

const addbtn = document.querySelector(".add");
const input = document.querySelector(".inp-group");


function removeInput(){
    this.parentElement.remove();
}

function addInput(){

//     const medications = [
//         "Abacavir",
//         "Abacavir / dolutegravir / lamivudine (Triumeq®)",
//         "Abacavir / lamivudine (Epzicom®)",
//         "Acyclovir",
//         "Alemtuzumab",
//         "Alendronate",
//         "Allopurinol",
//         "Amifostine",
//         "Amikacin",
//         "Aminocaproic Acid",
//         "Amitriptyline",
//         "Amlodipine",
//         "Amoxicillin",
//         "Amoxicillin / clavulanic acid",
//         "Amphotericin B",
//         "Ampicillin",
//         "Anti-Inhibitor Coagulant Complex (FEIBA)",
//         "Anti-thymocyte globulin",
//         "Aprepitant",
//         "Asparaginase",
//         "Atazanavir (Reyataz®)",
//         "Atenolol",
//         "Atovaquone",
//         "Azithromycin",
//         "Baclofen",
//         "Bleomycin",
//         "Bortezomib",
//         "Bosentan",
//         "Busulfan",
//         "Calcium",
//         "Captopril",
//         "Carbamazepine",
//         "Carboplatin",
//         "Carmustine",
//         "Cefaclor",
//         "Cefepime",
//         "Cefixime",
//         "Ceftazidime",
//         "Cefuroxime",
//         "Celecoxib",
//         "Cephalexin",
//         "Cidofovir",
//         "Cisplatin",
//         "Cladribine",
//         "Clarithromycin",
//         "Clindamycin",
//         "Clobazam",
//         "Clofarabine",
//         "Codeine",
//         "Crizanlizumab",
//         "Crizotinib",
//         "Cyclobenzaprine",
//         "Cyclophosphamide",
//         "Cyclosporine",
//         "Cyproheptadine",
//         "Cytarabine",
//         "Dacarbazine",
//         "Dactinomycin",
//         "Dapsone",
//         "Darunavir (Prezista®)",
//         "Dasatinib",
//         "Daunorubicin",
//         "Deferasirox (Exjade®)",
//         "Desmopressin (Stimate®)",
//         "Dexamethasone",
//         "Diclofenac",
//         "Didanosine",
//         "Dinutuximab",
//         "Dobutamine",
//         "Dopamine",
//         "Dornase alfa",
//         "Doxorubicin",
//         "Dronabinol",
//         "Efavirenz",
//         "Efavirenz / emtricitabine / tenofovir (Atripla®)",
//         "Eltrombopag",
//         "Elvitegravir / cobicistat / emtricitabine / tenofovir (Stribild®)",
//         "Elvitegravir / cobicistat / emtricitabine / tenofovir alafenamide (Genvoya®)",
//         "Emicizumab",
//         "Emtricitabine (Emtriva®)",
//         "Emtricitabine / rilpivirine / tenofovir alafenamide (Odefsey®)",
//         "Emtricitabine / tenofovir (Truvada®)",
//         "Emtricitabine / tenofovir alafenamide (Descovy®)",
//         "Enalapril",
//         "Enoxaparin",
//         "Erlotinib",
//         "Erythromycin",
//         "Erythropoietin",
//         "Etonogestrel (Nexplanon®)",
//         "Etoposide",
//         "Etravirine (Intelence®)",
//         "Factor IX complex",
//         "Factor IX concentrate",
//         "Factor VIIa (Recombinant)",
//         "Factor VIII (Human) and von Willebrand Factor",
//         "Factor VIII (Recombinant)",
//         "Famciclovir",
//         "Famotidine",
//         "Fidaxomicin",
//         "Fluconazole",
//         "Fludarabine",
//         "Fluorouracil",
//         "Foscarnet",
//         "Furosemide",
//         "G-CSF (Filgrastim)",
//         "Gabapentin",
//         "Ganciclovir",
//         "Gefitinib",
//         "Gemcitabine",
//         "Gemtuzumab ozogamicin",
//         "GM-CSF (Sargramostim)",
//         "Granisetron",
//         "Heparin Lock Flush for children and young adults",
//         "Heparin Lock Flush for infants",
//         "Hydralazine",
//         "Hydrocodone with acetaminophen",
//         "Hydrocortisone",
//         "Hydromorphone",
//         "Hydroxyurea",
//         "Hydroxyurea for sickle cell disease",
//         "Ifosfamide",
//         "Imatinib",
//         "Imipenem / cilastatin",
//         "Immune globulin",
//         "Interferon alfa-2a and alfa-2b",
//         "Interferon alfa-2b for melanoma",
//         "Interleukin-2 (Aldesleukin)",
//         "Irinotecan",
//         "Isotretinoin",
//         "Itraconazole",
//         "Ketoconazole",
//         "L-glutamine",
//         "Labetalol",
//         "Lamivudine",
//         "Leucovorin with high dose methotrexate (HDMTX)",
//         "Levothyroxine",
//         "Linezolid",
//         "Lomustine",
//         "Lopinavir / Ritonavir (Kaletra®)",
//         "Lorazepam",
//         "Lorlatinib",
//         "Magnesium",
//         "Maraviroc (Selzentry®)",
//         "Mechlorethamine",
//         "Megestrol acetate",
//         "Meloxicam",
//         "Melphalan",
//         "Meperidine",
//         "Mercaptopurine",
//         "Meropenem",
//         "Mesna",
//         "Methadone",
//         "Methotrexate",
//         "Methylphenidate",
//         "Metronidazole",
//         "Micafungin",
//         "Mitotane",
//         "Mitoxantrone",
//         "Modafinil",
//         "Morphine",
//         "Muromonab – CD3",
//         "Mycophenolate mofetil",
//         "Nelarabine",
//         "Nelfinavir",
//         "Neuromuscular blockers",
//         "Nevirapine",
//         "Norepinephrine",
//         "Omeprazole",
//         "Ondansetron",
//         "Oxycodone",
//         "Paclitaxel",
//         "PEGaspargase",
//         "Pegfilgrastim",
//         "Pemetrexed",
//         "Penicillin VK",
//         "Pentamidine (inhaled by mouth)",
//         "Phenobarbital",
//         "Phenytoin",
//         "Phosphorus",
//         "Posaconazole",
//         "Potassium",
//         "Prednisone",
//         "Probenecid",
//         "Procarbazine",
//         "Promethazine",
//         "Promethazine topical gel",
//         "Propoxyphene",
//         "Raltegravir (Isentress®)",
//         "Ranitidine",
//         "Rasburicase",
//         "Regorafenib",
//         "Rilpivirine (Edurant®)",
//         "Rilpivirine / emtricitabine / tenofovir (Complera®)",
//         "Ritonavir",
//         "Rituximab",
//         "Rivaroxaban",
//         "Ruxolitinib",
//         "Sacubitril/valsartan (Entresto®)",
//         "Saquinavir",
//         "Sirolimus",
//         "Sorafenib",
//         "Stavudine",
//         "Sucralfate",
//         "Sugammadex",
//         "Sunitinib",
//         "Tacrolimus",
//         "Temozolomide",
//         "Teniposide",
//         "Tenofovir",
//         "Thioguanine",
//         "Thiotepa",
//         "Tobramycin",
//         "Topotecan",
//         "Tretinoin – applied to the skin",
//         "Tretinoin – by mouth",
//         "Trimethoprim / sulfamethoxazole",
//         "Valproic acid",
//         "Vancomycin",
//         "Vinblastine",
//         "Vincristine",
//         "Voriconazole",
//         "Vorinostat",
//         "Voxelotor",
//         "Warfarin",
//         "Zidovudine",
//         "Zidovudine / Lamivudine (Combivir®)"
//       ];
    

    const name = document.createElement("textarea")
    
    name.type = "textarea";
    name.placeholder = "Medicine Name";
    name.name = "Medication";


   

    const  strength = document.createElement("input")
    strength.type = "text";
    strength.placeholder = "Strength";
    strength.name ="Strength";

    const dose = document.createElement("input")
    dose.type = "number";
    dose.placeholder = "dose";
    dose.name="Dose";

    const duration = document.createElement("input")
    duration.type = "text";
    duration.placeholder = "Duration";
    duration.name="Duration";

    const btn = document.createElement("a")
    btn.className = "delete";
    btn.innerHTML = "&times";

    btn.addEventListener("click", removeInput);

    btn.addEvent

    const flex = document.createElement("div")
    flex.className = "flex";
    
    input.appendChild(flex);
    flex.appendChild(name);
    flex.appendChild(strength);
    flex.appendChild(dose);
    flex.appendChild(duration);
    flex.appendChild(btn);

}

addbtn.addEventListener("click", addInput);


const searchInput = document.getElementById('.search');
const searchWrapper = document.querySelector('.inp-group');
const resultWrapper = document.querySelector('.results');

searchInput.addEventListener('keyup', (e) => {
    // let results = 
    console.log(e.target.value);
});

