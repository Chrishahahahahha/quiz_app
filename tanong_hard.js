const hardQuestions = {
    kasaysayan: [
        {
            question: "Saan naganap ang 'Battle of Tirad Pass'?",
            correct_answer: "Ilocos Sur",
            incorrect_answers: ["Ilocos Norte", "Nueva Ecija", "Pampanga"]
        },
        {
            question: "Anong kilusan ang itinatag ni Isabelo de los Reyes noong 1902?",
            correct_answer: "Iglesia Filipina Independiente",
            incorrect_answers: ["Katipunan", "La Liga Filipina", "Propaganda Movement"]
        },
        {
            question: "Sino ang kinilalang 'Ina ng Biak-na-Bato'?",
            correct_answer: "Trinidad Tecson",
            incorrect_answers: ["Melchora Aquino", "Gregoria de Jesus", "Gabriela Silang"]
        },
        {
            question: "Ano ang orihinal na pangalan ng Unang Republika ng Pilipinas na itinatag noong 1899?",
            correct_answer: "Malolos Republic",
            incorrect_answers: ["Katipunan Republic", "First Philippine Republic", "Revolutionary Republic"]
        },
        {
            question: "Sino ang unang Pilipinong naglingkod bilang Punong Ministro ng Pilipinas?",
            correct_answer: "Sergio Osmeña",
            incorrect_answers: ["Manuel L. Quezon", "José P. Laurel", "Carlos P. Garcia"]
        },
        {
            question: "Ano ang tawag sa batas na nagbigay ng edukasyon sa wikang Filipino noong 1935?",
            correct_answer: "Commonwealth Act No. 570",
            incorrect_answers: ["Batas Pambansa Blg. 86", "Republic Act No. 1425", "Presidential Decree No. 1552"]
        },
        {
            question: "Saan naganap ang EDSA II noong 2001?",
            correct_answer: "Metro Manila",
            incorrect_answers: ["Cebu", "Davao", "Iloilo"]
        },
        {
            question: "Ano ang tawag sa himagsikan na pinamunuan ni Andres Bonifacio laban sa mga Kastila?",
            correct_answer: "Rebolusyong Pilipino",
            incorrect_answers: ["Himagsikang 1896", "Guerilla War", "People Power Revolution"]
        },
        {
            question: "Sino ang naging unang pangulo ng Pilipinas matapos ang EDSA People Power Revolution noong 1986?",
            correct_answer: "Corazon Aquino",
            incorrect_answers: ["Ferdinand Marcos", "Fidel V. Ramos", "Joseph Estrada"]
        },
        {
            question: "Ano ang tawag sa batas na nagtatag ng Autonomous Region in Muslim Mindanao (ARMM) noong 1989?",
            correct_answer: "Presidential Decree No. 1083",
            incorrect_answers: ["Republic Act No. 6734", "Batas Pambansa Blg. 232", "Executive Order No. 209"]
        },
        {
            question: "Sino ang Pilipinong nagtatag ng La Liga Filipina noong 1892?",
            correct_answer: "José Rizal",
            incorrect_answers: ["Andres Bonifacio", "Emilio Aguinaldo", "Apolinario Mabini"]
        },
        {
            question: "Ano ang tawag sa unang umiiral na saligang batas ng Pilipinas na naipasa noong 1899?",
            correct_answer: "Malolos Constitution",
            incorrect_answers: ["1935 Constitution", "1987 Constitution", "1898 Constitution"]
        },
        {
            question: "Sino ang lider ng Katipunan na kilala rin bilang 'Supremo'?",
            correct_answer: "Andres Bonifacio",
            incorrect_answers: ["Emilio Aguinaldo", "Apolinario Mabini", "Antonio Luna"]
        },
        {
            question: "Anong digmaan ang naganap mula 1941 hanggang 1945 na ikinonsidera ang malaking bahagi ng kasaysayan ng Pilipinas?",
            correct_answer: "Ikalawang Digmaang Pandaigdig",
            incorrect_answers: ["Unang Digmaang Pandaigdig", "Digmaang Pilipino-Amerikano", "Cold War"]
        },
        {
            question: "Sino ang unang Pilipinong naging pangulo ng Estados Unidos?",
            correct_answer: "Walang Pilipinong naging pangulo ng Estados Unidos",
            incorrect_answers: ["Ferdinand Marcos", "Manuel L. Quezon", "Jose P. Laurel"]
        },
        {
            question: "Ano ang tawag sa kilusang naglalayong palayain ang Pilipinas mula sa mga Hapones noong Ikalawang Digmaang Pandaigdig?",
            correct_answer: "Hukbalahap",
            incorrect_answers: ["Katipunan", "La Solidaridad", "Makabayang Kilusan"]
        },
        {
            question: "Sino ang kilala bilang 'Ama ng Wikang Pambansa'?",
            correct_answer: "Manuel L. Quezon",
            incorrect_answers: ["José Rizal", "Andres Bonifacio", "Emilio Aguinaldo"]
        },
        {
            question: "Ano ang tawag sa kasunduan na nagtatapos ng Digmaang Pilipino-Amerikano noong 1902?",
            correct_answer: "Kasunduan sa Paris",
            incorrect_answers: ["Kasunduan sa Versailles", "Treaty of Manila", "Pact of Biak-na-Bato"]
        },
        {
            question: "Sino ang Pilipinong naglilingkod bilang unang ministro ng digmaan ng Pilipinas?",
            correct_answer: "Gregorio del Pilar",
            incorrect_answers: ["Emilio Aguinaldo", "Antonio Luna", "Josefa Llanes Escoda"]
        },
        {
            question: "Ano ang tawag sa malawakang kilos protesta laban sa rehimen ni Ferdinand Marcos noong 1986?",
            correct_answer: "EDSA People Power Revolution",
            incorrect_answers: ["HIMAG", "Rebolusyon 1986", "People's Uprising"]
        },
        {
            question: "Saan isinagawa ang unang eleksyon ng Pilipinas na may pananagutan sa buong bansa noong 1941?",
            correct_answer: "Bataan",
            incorrect_answers: ["Manila", "Cebu", "Davao"]
        },
        {
            question: "Ano ang pangalan ng unang umiiral na unibersidad sa Pilipinas na itinatag noong 1611?",
            correct_answer: "University of Santo Tomas",
            incorrect_answers: ["Ateneo de Manila University", "San Beda University", "Far Eastern University"]
        },
        {
            question: "Sino ang Pilipinong pintor na kilala sa kanyang likhang-sining na 'Spoliarium'?",
            correct_answer: "Juan Luna",
            incorrect_answers: ["Fernando Amorsolo", "Felix Resurreccion Hidalgo", "Vicente Manansala"]
        },
        {
            question: "Ano ang tawag sa dokumento na nagdedeklara ng kasarinlan ng Pilipinas mula sa Espanya noong Hunyo 12, 1898?",
            correct_answer: "Deklarasyon ng Kalayaan",
            incorrect_answers: ["Constituent Assembly", "Malolos Declaration", "Biak-na-Bato Document"]
        },
        {
            question: "Sino ang unang Pilipinong umakyat sa Mt. Everest?",
            correct_answer: "Leo Oracion",
            incorrect_answers: ["Manny Pacquiao", "Jose Rizal", "Carlos P. Garcia"]
        },
        {
            question: "Ano ang tawag sa kilusang pang-edukasyon na pinangunahan ni Pasyon ang paglaban sa kolonyalismong Espanyol?",
            correct_answer: "Propaganda Movement",
            incorrect_answers: ["La Solidaridad", "Katipunan", "La Liga Filipina"]
        },
        {
            question: "Sino ang Pilipinong bayani na kilala bilang 'Dakilang Lumpo'?",
            correct_answer: "Apolinario Mabini",
            incorrect_answers: ["Jose Rizal", "Andres Bonifacio", "Emilio Aguinaldo"]
        },
        {
            question: "Ano ang tawag sa kasunduan na nagtatapos ng Ikalawang Digmaang Pandaigdig sa Pilipinas?",
            correct_answer: "Surrender of Japan",
            incorrect_answers: ["Treaty of Manila", "Pact of San Francisco", "Armistice of Manila"]
        },
        {
            question: "Sino ang unang babaeng pangulo ng Pilipinas?",
            correct_answer: "Walang babaeng pangulo ng Pilipinas",
            incorrect_answers: ["Corazon Aquino", "Gloria Macapagal Arroyo", "Leni Robredo"]
        },
        {
            question: "Ano ang tawag sa makasaysayang kaganapan noong 1981 na nagpasimula ng People Power Revolution?",
            correct_answer: "Assassination of Ninoy Aquino",
            incorrect_answers: ["Martial Law Declaration", "Snap Elections", "EDSA March"]
        },
        {
            question: "Sino ang unang Pilipinong nanalo ng Nobel Prize?",
            correct_answer: "Walang Pilipinong nanalo ng Nobel Prize",
            incorrect_answers: ["José Rizal", "Carlos P. Romulo", "Lea Salonga"]
        },
        {
            question: "Ano ang tawag sa pinakamatandang pook na pinaniniwalaang lugar ng mga sinaunang Pilipino na matatagpuan sa Palawan?",
            correct_answer: "Tabon Caves",
            incorrect_answers: ["Ifugao Rice Terraces", "Banaue Rice Terraces", "Fort Santiago"]
        },
        {
            question: "Sino ang Pilipinong kompositor na kilala sa awiting 'Bayan Ko'?",
            correct_answer: "Constancio de Guzman",
            incorrect_answers: ["Lea Salonga", "Freddie Aguilar", "Ryan Cayabyab"]
        },
        {
            question: "Ano ang tawag sa panahon ng pamumuno ni Ferdinand Marcos mula 1965 hanggang 1986?",
            correct_answer: "Marcos Era",
            incorrect_answers: ["People Power Era", "Post-Colonial Era", "Commonwealth Period"]
        },
        {
            question: "Sino ang unang Pilipinong naglingkod bilang Supreme Court Chief Justice?",
            correct_answer: "Pedro Concepción",
            incorrect_answers: ["Antonio Molina", "Quirino Lizardo", "Hilario Davide Jr."]
        },
        {
            question: "Ano ang tawag sa pakikipaglaban ng mga Pilipino laban sa mga Amerikano mula 1899 hanggang 1902?",
            correct_answer: "Digmaang Pilipino-Amerikano",
            incorrect_answers: ["Rebolusyong Pilipino", "Himagsikang Pilipino", "Guerilla War"]
        },
        {
            question: "Sino ang Pilipinong rebolusyonaryo na kilala bilang 'Brains of the Katipunan'?",
            correct_answer: "Emilio Aguinaldo",
            incorrect_answers: ["Andres Bonifacio", "Apolinario Mabini", "Jose Rizal"]
        },
        {
            question: "Ano ang tawag sa paglipat ng pamahalaan ng Pilipinas mula sa Maynila patungong Tarlac noong panahon ng digmaan?",
            correct_answer: "Lipat Kapulungan",
            incorrect_answers: ["Exodus", "Bayanihan", "Deklarasyon"]
        },
        {
            question: "Sino ang lider ng Hukbalahap na lumaban laban sa mga Hapones at Amerikano?",
            correct_answer: "Luis Taruc",
            incorrect_answers: ["Jose Maria Sison", "Fernando Poe Jr.", "Benigno Aquino Jr."]
        },
        {
            question: "Ano ang pangalan ng unang pambansang watawat ng Pilipinas na ipinakita noong Hunyo 12, 1898?",
            correct_answer: "Watawat ng Pilipinas",
            incorrect_answers: ["Watawat ng Katipunan", "Watawat ng Malolos", "Watawat ng Himagsikan"]
        },
        {
            question: "Sino ang unang Pilipinong naglingkod bilang gobernador-heneral ng Pilipinas?",
            correct_answer: "Miguel López de Legazpi",
            incorrect_answers: ["Andrés Bonifacio", "Emilio Aguinaldo", "José Rizal"]
        },
        {
            question: "Ano ang tawag sa kilusang pang-edukasyon na naglayong itaguyod ang wikang Filipino at kultura noong panahon ng Amerikano?",
            correct_answer: "Commonwealth Movement",
            incorrect_answers: ["Propaganda Movement", "La Solidaridad", "Katipunan"]
        },
        {
            question: "Sino ang Pilipinong pintor na kilala sa kanyang obra na 'The Death of Cleopatra'?",
            correct_answer: "Juan Luna",
            incorrect_answers: ["Fernando Amorsolo", "Felix Resurreccion Hidalgo", "Vicente Manansala"]
        },
        {
            question: "Ano ang tawag sa kasunduang nagbigay daan sa pagdating ng mga Kastila sa Pilipinas noong 1521?",
            correct_answer: "Pagdating ni Ferdinand Magellan",
            incorrect_answers: ["Pagdating ni Miguel López de Legazpi", "Pagdating ni Rajah Humabon", "Pagdating ni Andres Bonifacio"]
        },
        {
            question: "Sino ang kilalang lider ng Rebolusyong Pilipino na kilala rin bilang 'Unang Pangulo ng Pilipinas'?",
            correct_answer: "Emilio Aguinaldo",
            incorrect_answers: ["Andres Bonifacio", "Jose Rizal", "Apolinario Mabini"]
        },
        {
            question: "Ano ang tawag sa panahon ng pagpapahayag ng kasarinlan ng Pilipinas mula sa Espanya noong 1898?",
            correct_answer: "Deklarasyon ng Kalayaan",
            incorrect_answers: ["Malolos Congress", "Biak-na-Bato", "La Liga Filipina"]
        },
        {
            question: "Sino ang Pilipinong bayani na kilala bilang 'Dakilang Sugo ng Kalayaan'?",
            correct_answer: "Jose Rizal",
            incorrect_answers: ["Andres Bonifacio", "Emilio Aguinaldo", "Apolinario Mabini"]
        },
        {
            question: "Ano ang tawag sa himagsikang Pilipino laban sa mga Amerikano na pinamunuan ni Emilio Aguinaldo?",
            correct_answer: "Rebolusyong Pilipino-Amerikano",
            incorrect_answers: ["Himagsikang 1896", "Guerilla War", "People Power Revolution"]
        },
        {
            question: "Sino ang unang Pilipinong naging Gobernador-Heneral ng Pilipinas matapos ang kasarinlan?",
            correct_answer: "Manuel L. Quezon",
            incorrect_answers: ["Sergio Osmeña", "Jose P. Laurel", "Carlos P. Garcia"]
        },
        {
            question: "Ano ang tawag sa batas na nagtatag ng Komonwelt ng Pilipinas noong 1935?",
            correct_answer: "Tydings-McDuffie Act",
            incorrect_answers: ["Philippine Independence Act", "Jones Act", "Bell Trade Act"]
        },
        {
            question: "Sino ang Pilipinong rebolusyonaryo na kilala bilang 'Hari ng mga Makabagong Taktika sa Pakikidigma'?",
            correct_answer: "Antonio Luna",
            incorrect_answers: ["Emilio Aguinaldo", "Andres Bonifacio", "Gregorio del Pilar"]
        },
        {
            question: "Ano ang tawag sa panahon ng kolonyalismong Amerikano sa Pilipinas mula 1898 hanggang 1946?",
            correct_answer: "Panahon ng Amerikano",
            incorrect_answers: ["Panahon ng Kastila", "Panahon ng Hapon", "Panahon ng Rebolusyon"]
        },
        {
            question: "Sino ang Pilipinong politiko na naging pangulo mula 1992 hanggang 1998?",
            correct_answer: "Fidel V. Ramos",
            incorrect_answers: ["Joseph Estrada", "Gloria Macapagal Arroyo", "Benigno Aquino III"]
        },
        {
            question: "Ano ang tawag sa deklarasyon na inihayag ni Emilio Aguinaldo noong Hunyo 12, 1898?",
            correct_answer: "Deklarasyon ng Kalayaan",
            incorrect_answers: ["Pact of Biak-na-Bato", "Malolos Constitution", "Ang Bagong Lipunan"]
        },
        {
            question: "Sino ang lider ng Katipunan na tumakbo bilang pangulo ng unang Republika ng Pilipinas?",
            correct_answer: "Emilio Aguinaldo",
            incorrect_answers: ["Andres Bonifacio", "Jose Rizal", "Apolinario Mabini"]
        },
        {
            question: "Ano ang tawag sa unang pangulong Republika ng Pilipinas na itinatag noong 1899?",
            correct_answer: "Malolos Republic",
            incorrect_answers: ["First Philippine Republic", "Katipunan Republic", "Revolutionary Republic"]
        },
        {
            question: "Sino ang Pilipinong sumulat ng nobelang 'Noli Me Tangere'?",
            correct_answer: "José Rizal",
            incorrect_answers: ["Andres Bonifacio", "Emilio Aguinaldo", "Apolinario Mabini"]
        },
        {
            question: "Ano ang tawag sa kasunduan na nagtatapos ng Digmaang Pilipino-Amerikano noong 1902?",
            correct_answer: "Surrender sa Aguinaldo",
            incorrect_answers: ["Kasunduan sa Paris", "Treaty of Manila", "Pact of Biak-na-Bato"]
        },
        {
            question: "Sino ang Pilipinong nagtatag ng kilusang 'La Liga Filipina'?",
            correct_answer: "José Rizal",
            incorrect_answers: ["Andres Bonifacio", "Emilio Aguinaldo", "Apolinario Mabini"]
        },
        {
            question: "Ano ang tawag sa unang eleksyon na may pananagutan sa buong bansa na ginanap noong 1935?",
            correct_answer: "Pangulo at Kongreso",
            incorrect_answers: ["Sangguniang Bayan", "Pangulo Lang", "Kongreso Lang"]
        },
        {
            question: "Sino ang unang Pilipinong nanalo sa eleksyon bilang pangulo ng Pilipinas?",
            correct_answer: "Manuel L. Quezon",
            incorrect_answers: ["Emilio Aguinaldo", "Jose P. Laurel", "Sergio Osmeña"]
        },
        {
            question: "Ano ang tawag sa kilusang nagtulak sa pagkakaroon ng kalayaan ng Pilipinas mula sa Espanya?",
            correct_answer: "Rebolusyong Pilipino",
            incorrect_answers: ["Himagsikang 1896", "Guerilla War", "People Power Revolution"]
        },
        {
            question: "Sino ang unang babaeng naging gobernador ng isang lalawigan sa Pilipinas?",
            correct_answer: "Evangelina Macaraeg Macaraeg",
            incorrect_answers: ["Gloria Macapagal Arroyo", "Corazon Aquino", "Leni Robredo"]
        },
        {
            question: "Ano ang tawag sa dokumentong nagtatag ng Unang Republika ng Pilipinas?",
            correct_answer: "Malolos Constitution",
            incorrect_answers: ["1935 Constitution", "1987 Constitution", "1898 Constitution"]
        },
        {
            question: "Sino ang Pilipinong kilala bilang 'Dakilang Heneral ng Hukbong Pilipino'?",
            correct_answer: "Antonio Luna",
            incorrect_answers: ["Emilio Aguinaldo", "Andres Bonifacio", "Gregorio del Pilar"]
        },
        {
            question: "Ano ang tawag sa batas na nagtatag ng Komonwelt ng Pilipinas?",
            correct_answer: "Tydings-McDuffie Act",
            incorrect_answers: ["Jones Act", "Philippine Independence Act", "Bell Trade Act"]
        },
        {
            question: "Sino ang unang Pilipinong naging senador ng Pilipinas?",
            correct_answer: "Sergio Osmeña",
            incorrect_answers: ["Manuel L. Quezon", "Emilio Aguinaldo", "Jose P. Laurel"]
        },
        {
            question: "Ano ang tawag sa kasunduang nagbigay daan sa pag-alis ng mga Kastila sa Pilipinas?",
            correct_answer: "Kasunduan sa Paris",
            incorrect_answers: ["Treaty of Manila", "Pact of Biak-na-Bato", "Surrender sa Aguinaldo"]
        },
        {
            question: "Sino ang Pilipinong naging unang ministro ng kalusugan?",
            correct_answer: "Walang rekord ng unang ministro ng kalusugan",
            incorrect_answers: ["Jose Fabella", "Ramon Magsaysay", "Manuel Roxas"]
        },
        {
            question: "Ano ang tawag sa himagsikang Pilipino laban sa mga Kastila na nagsimula noong 1896?",
            correct_answer: "Rebolusyong Pilipino",
            incorrect_answers: ["Himagsikang 1896", "Guerilla War", "People Power Revolution"]
        },
        {
            question: "Sino ang Pilipinong nagtatag ng samahang 'Katipunan'?",
            correct_answer: "Andres Bonifacio",
            incorrect_answers: ["Emilio Aguinaldo", "Jose Rizal", "Apolinario Mabini"]
        },
        {
            question: "Ano ang tawag sa unang pambansang simbahan ng Pilipinas na itinayo noong 1581?",
            correct_answer: "Santo Domingo Church",
            incorrect_answers: ["San Agustin Church", "Manila Cathedral", "Quiapo Church"]
        },
        {
            question: "Sino ang unang Pilipinong naging miyembro ng United Nations?",
            correct_answer: "Carlos P. Romulo",
            incorrect_answers: ["Manuel L. Quezon", "Sergio Osmeña", "Jose P. Laurel"]
        },
        {
            question: "Ano ang tawag sa batas na nagtatag ng sistemang pang-edukasyon sa Pilipinas noong panahon ng Amerikano?",
            correct_answer: "Jones Act",
            incorrect_answers: ["Tydings-McDuffie Act", "Philippine Independence Act", "Bell Trade Act"]
        },
        {
            question: "Sino ang Pilipinong naging unang punong ministro ng Unang Republika ng Pilipinas?",
            correct_answer: "Apolinario Mabini",
            incorrect_answers: ["Emilio Aguinaldo", "Andres Bonifacio", "Jose Rizal"]
        },
        {
            question: "Ano ang tawag sa himagsikang pinamunuan ni Andres Bonifacio laban sa mga Kastila?",
            correct_answer: "Himagsikang Katipunan",
            incorrect_answers: ["Himagsikang 1896", "Rebolusyong Pilipino", "Guerilla War"]
        },
        {
            question: "Sino ang Pilipinong naging unang pangulo ng Unang Republika ng Pilipinas?",
            correct_answer: "Emilio Aguinaldo",
            incorrect_answers: ["Andres Bonifacio", "Apolinario Mabini", "Jose Rizal"]
        },
        {
            question: "Ano ang tawag sa paglipat ng administrasyon ng Pilipinas mula Espanya patungong Estados Unidos noong 1898?",
            correct_answer: "Treaty of Paris",
            incorrect_answers: ["Pact of Biak-na-Bato", "Kasunduan sa Madrid", "Surrender sa Aguinaldo"]
        },
        {
            question: "Sino ang Pilipinong pintor na kilala sa kanyang mga gawa na nagpapakita ng kasaysayan at kultura ng Pilipinas?",
            correct_answer: "Juan Luna",
            incorrect_answers: ["Fernando Amorsolo", "Felix Resurreccion Hidalgo", "Vicente Manansala"]
        },
        {
            question: "Ano ang tawag sa panahon ng pamumuno ni Ferdinand Marcos na kilala sa deklarasyon ng Batas Militar?",
            correct_answer: "Martial Law Era",
            incorrect_answers: ["People Power Era", "Post-Colonial Era", "Commonwealth Period"]
        },
        {
            question: "Sino ang lider ng Rebolusyong Pilipino na kilala bilang 'Kapitan ng Pambansang Katipunan'?",
            correct_answer: "Andres Bonifacio",
            incorrect_answers: ["Emilio Aguinaldo", "Jose Rizal", "Apolinario Mabini"]
        },
        {
            question: "Ano ang tawag sa unang pambansang watawat ng Pilipinas na may tatlong bituin at isang araw?",
            correct_answer: "Flag ng Katipunan",
            incorrect_answers: ["Flag ng Malolos", "Flag ng Unang Republika", "Flag ng Pambansang Sandaang Taon"]
        },
        {
            question: "Sino ang unang Pilipinong naging kalihim ng Departamentong Pinansyal?",
            correct_answer: "Manuel Roxas",
            incorrect_answers: ["Sergio Osmeña", "Carlos P. Garcia", "Elpidio Quirino"]
        },
        {
            question: "Ano ang tawag sa himagsikang Pilipino laban sa mga Hapones noong Ikalawang Digmaang Pandaigdig?",
            correct_answer: "Hukbalahap Rebellion",
            incorrect_answers: ["Katipunan Uprising", "People Power Revolution", "Guerilla War"]
        },
        {
            question: "Sino ang Pilipinong sumulat ng 'Florante at Laura'?",
            correct_answer: "Francisco Balagtas",
            incorrect_answers: ["Jose Rizal", "Andres Bonifacio", "Emilio Aguinaldo"]
        },
        {
            question: "Ano ang tawag sa kasunduang nagbigay daan sa pagbabalik ng mga Pilipino mula Amerika patungong Pilipinas noong 1946?",
            correct_answer: "Philippine Independence",
            incorrect_answers: ["Treaty of Manila", "Tydings-McDuffie Act", "Jones Act"]
        },
        {
            question: "Sino ang unang babaeng Pilipino na nahalal bilang pangulo ng isang bansa?",
            correct_answer: "Walang babaeng Pilipino na nahalal bilang pangulo ng isang bansa",
            incorrect_answers: ["Corazon Aquino", "Gloria Macapagal Arroyo", "Leni Robredo"]
        },
        {
            question: "Ano ang tawag sa dokumentong nagdedeklara ng kasarinlan ng Pilipinas mula sa Espanya?",
            correct_answer: "Deklarasyon ng Kalayaan",
            incorrect_answers: ["Pact of Biak-na-Bato", "Malolos Constitution", "Ang Bagong Lipunan"]
        },
        {
            question: "Sino ang Pilipinong lider na nagtatag ng Rebolusyong Kilusang Masa noong 1960s?",
            correct_answer: "Jose Maria Sison",
            incorrect_answers: ["Luis Taruc", "Emilio Aguinaldo", "Andres Bonifacio"]
        },
        {
            question: "Ano ang tawag sa batas na nagbigay ng karapatan sa mga kababaihan na bumoto noong 1937?",
            correct_answer: "Women's Suffrage Act",
            incorrect_answers: ["Tydings-McDuffie Act", "Jones Act", "Philippine Independence Act"]
        },
        {
            question: "Sino ang Pilipinong naging unang ministro ng edukasyon?",
            correct_answer: "Leon Maria Guerrero",
            incorrect_answers: ["Teodoro Agoncillo", "Jose Rizal", "Manuel L. Quezon"]
        },
        {
            question: "Ano ang tawag sa himagsikang naganap sa Pilipinas noong 1986 na nagpatalsik kay Ferdinand Marcos?",
            correct_answer: "EDSA People Power Revolution",
            incorrect_answers: ["Himagsikang 1986", "Rebolusyong EDSA", "Guerilla Uprising"]
        },
        {
            question: "Sino ang Pilipinong rebolusyonaryo na kilala bilang 'Dakilang Lumpo'?",
            correct_answer: "Apolinario Mabini",
            incorrect_answers: ["Jose Rizal", "Andres Bonifacio", "Emilio Aguinaldo"]
        },
        {
            question: "Ano ang tawag sa unang pambansang arkibong Pilipino na itinatag noong 1950?",
            correct_answer: "National Archives of the Philippines",
            incorrect_answers: ["National Library", "National Museum", "National Historical Commission"]
        },
        {
            question: "Sino ang unang Pilipinong naging Speaker of the House of Representatives?",
            correct_answer: "Daniel Romualdez",
            incorrect_answers: ["Ferdinand Marcos", "Sergio Osmeña", "Manuel Roxas"]
        },
        {
            question: "Ano ang tawag sa kasunduan na nagbigay daan sa pagtatapos ng kolonyalismong Kastila sa Pilipinas?",
            correct_answer: "Treaty of Paris",
            incorrect_answers: ["Kasunduan sa Madrid", "Pact of Biak-na-Bato", "Surrender sa Aguinaldo"]
        },
        {
            question: "Sino ang Pilipinong naging unang Chief Justice ng Korte Suprema?",
            correct_answer: "Pedro Concepción",
            incorrect_answers: ["Antonio Luna", "Jose Abad Santos", "Manuel L. Quezon"]
        },
        {
            question: "Ano ang tawag sa batas na nagtatag ng sistemang pampulitika sa Pilipinas noong panahon ng Amerikano?",
            correct_answer: "Jones Act",
            incorrect_answers: ["Tydings-McDuffie Act", "Philippine Independence Act", "Bell Trade Act"]
        },
        {
            question: "Sino ang unang Pilipinong naging ambassador ng Pilipinas sa United Nations?",
            correct_answer: "Carlos P. Romulo",
            incorrect_answers: ["Manuel L. Quezon", "Sergio Osmeña", "Jose P. Laurel"]
        },
        {
            question: "Ano ang tawag sa dokumentong nagtatag ng unang pambansang lehislatura ng Pilipinas?",
            correct_answer: "Malolos Congress",
            incorrect_answers: ["Philippine Assembly", "National Assembly", "Senate of the Philippines"]
        },
        {
            question: "Sino ang Pilipinong kilala bilang 'Ama ng Katipunan'?",
            correct_answer: "Andres Bonifacio",
            incorrect_answers: ["Emilio Aguinaldo", "Jose Rizal", "Apolinario Mabini"]
        },
        {
            question: "Ano ang tawag sa panahon ng pamahalaan ni Manuel L. Quezon bilang Pangulo ng Commonwealth?",
            correct_answer: "Commonwealth Period",
            incorrect_answers: ["Martial Law Era", "Post-Colonial Era", "Revolutionary Period"]
        },
        {
            question: "Sino ang Pilipinong naging unang pangulo ng Republika ng Pilipinas pagkatapos ng World War II?",
            correct_answer: "Manuel Roxas",
            incorrect_answers: ["Sergio Osmeña", "Elpidio Quirino", "Carlos P. Garcia"]
        },
        {
            question: "Ano ang tawag sa kilusang naglalayong itaguyod ang kasarinlan ng Pilipinas noong panahon ng Amerikano?",
            correct_answer: "Nationalist Movement",
            incorrect_answers: ["Propaganda Movement", "La Solidaridad", "Katipunan"]
        },
        {
            question: "Sino ang unang Pilipinong naging Tagapag-ingat ng Watawat ng Pilipinas?",
            correct_answer: "Gregorio del Pilar",
            incorrect_answers: ["Andres Bonifacio", "Emilio Aguinaldo", "Jose Rizal"]
        },
        {
            question: "Ano ang tawag sa batas na nagbigay daan sa pagkakatatag ng Senate ng Pilipinas?",
            correct_answer: "1935 Constitution",
            incorrect_answers: ["Malolos Constitution", "1987 Constitution", "1898 Constitution"]
        },
        {
            question: "Sino ang Pilipinong naging unang senador ng Pilipinas?",
            correct_answer: "Sergio Osmeña",
            incorrect_answers: ["Manuel L. Quezon", "Emilio Aguinaldo", "Jose P. Laurel"]
        },
        {
            question: "Ano ang tawag sa kasunduan na nagtatag ng karapatang mag-aral at magtrabaho ang mga Pilipino sa Estados Unidos?",
            correct_answer: "Bell Trade Act",
            incorrect_answers: ["Jones Act", "Tydings-McDuffie Act", "Philippine Independence Act"]
        },
        {
            question: "Sino ang unang Pilipinong naging kalihim ng DSWD (Department of Social Welfare and Development)?",
            correct_answer: "Gloria Macapagal Arroyo",
            incorrect_answers: ["Maria Lourdes Sereno", "Leni Robredo", "Cielo Rusli"]
        },
        {
            question: "Ano ang tawag sa pakikipaglaban ng mga Pilipino para sa kanilang kalayaan mula sa mga mananakop?",
            correct_answer: "Rebolusyon",
            incorrect_answers: ["Deklarasyon", "Kasunduan", "Paglaya"]
        },
        {
            question: "Sino ang Pilipinong naging unang ministro ng DepEd (Department of Education)?",
            correct_answer: "Jose Fabella",
            incorrect_answers: ["Teodoro Agoncillo", "Manuel L. Quezon", "Leon Maria Guerrero"]
        },
        {
            question: "Ano ang tawag sa dokumentong nagtatag ng unang pambansang lehislatura ng Pilipinas noong 1898?",
            correct_answer: "Malolos Congress",
            incorrect_answers: ["Philippine Assembly", "National Assembly", "Senate of the Philippines"]
        },
        {
            question: "Sino ang lider ng Kilusang Labas na lumaban sa mga Hapones noong Ikalawang Digmaang Pandaigdig?",
            correct_answer: "Sergio Osmeña",
            incorrect_answers: ["Emilio Aguinaldo", "Andres Bonifacio", "Jose Rizal"]
        },
        {
            question: "Ano ang tawag sa panahon ng pamumuno ni Diosdado Macapagal bilang Pangulo ng Pilipinas?",
            correct_answer: "Macapagal Era",
            incorrect_answers: ["Marcos Era", "Ramos Era", "Aquino Era"]
        },
        {
            question: "Sino ang Pilipinong naging unang pangulo ng Liberal Party?",
            correct_answer: "Ramon Magsaysay",
            incorrect_answers: ["Sergio Osmeña", "Manuel Roxas", "Elpidio Quirino"]
        },
        {
            question: "Ano ang tawag sa himagsikang Pilipino laban sa mga Amerikano na pinamunuan ni Emilio Aguinaldo?",
            correct_answer: "Rebolusyong Pilipino-Amerikano",
            incorrect_answers: ["Himagsikang 1896", "Rebolusyong Pilipino", "Guerilla War"]
        },
        {
            question: "Sino ang Pilipinong naging unang kalihim ng Department of Agrikultura?",
            correct_answer: "Manuel L. Quezon",
            incorrect_answers: ["Sergio Osmeña", "Carlos P. Garcia", "Elpidio Quirino"]
        },
        {
            question: "Ano ang tawag sa kasunduang nagbigay daan sa pagbabalik ng mga Pilipino mula Amerika patungong Pilipinas noong 1946?",
            correct_answer: "Philippine Independence",
            incorrect_answers: ["Treaty of Manila", "Tydings-McDuffie Act", "Jones Act"]
        },
        {
            question: "Sino ang Pilipinong naging unang punong ministro ng Unang Republika ng Pilipinas?",
            correct_answer: "Apollinario Mabini",
            incorrect_answers: ["Emilio Aguinaldo", "Andres Bonifacio", "Jose Rizal"]
        },
        {
            question: "Ano ang tawag sa dokumentong nagtatag ng sistemang pampulitika sa Pilipinas noong panahon ng Amerikano?",
            correct_answer: "Jones Act",
            incorrect_answers: ["Tydings-McDuffie Act", "Philippine Independence Act", "Bell Trade Act"]
        },
        {
            question: "Sino ang unang Pilipinong naging pangulo ng Pilipinas matapos ang EDSA People Power Revolution?",
            correct_answer: "Corazon Aquino",
            incorrect_answers: ["Ferdinand Marcos", "Fidel V. Ramos", "Joseph Estrada"]
        },
        {
            question: "Ano ang tawag sa panahon ng kolonyalismong Amerikano sa Pilipinas mula 1898 hanggang 1946?",
            correct_answer: "Panahon ng Amerikano",
            incorrect_answers: ["Panahon ng Kastila", "Panahon ng Hapon", "Panahon ng Rebolusyon"]
        },
        {
            question: "Sino ang unang Pilipinong naging pangulo ng Pilipinas?",
            correct_answer: "Manuel L. Quezon",
            incorrect_answers: ["Emilio Aguinaldo", "Jose P. Laurel", "Sergio Osmeña"]
        },
        {
            question: "Ano ang tawag sa unang pambansang aklat na isinulat ni Jose Rizal?",
            correct_answer: "Noli Me Tangere",
            incorrect_answers: ["El Filibusterismo", "La Solidaridad", "Mi Ultimo Adios"]
        },
        {
            question: "Sino ang Pilipinong kilala bilang 'Pambansang Alagad ng Sining' sa Panitikang Filipino?",
            correct_answer: "Nick Joaquin",
            incorrect_answers: ["José Rizal", "Carlos P. Romulo", "Fernando Amorsolo"]
        },
        {
            question: "Ano ang tawag sa himagsikan ng mga Pilipino laban sa mga Kastila na nagsimula noong 1896?",
            correct_answer: "Rebolusyong Pilipino",
            incorrect_answers: ["Himagsikang 1896", "Guerilla War", "People Power Revolution"]
        },
        {
            question: "Sino ang Pilipinong naging unang pangulo ng Commonwealth ng Pilipinas?",
            correct_answer: "Manuel L. Quezon",
            incorrect_answers: ["Sergio Osmeña", "Emilio Aguinaldo", "Jose P. Laurel"]
        },
        {
            question: "Ano ang tawag sa kasunduang nagbigay daan sa pagtatapos ng Digmaang Pilipino-Amerikano?",
            correct_answer: "Kasunduan sa Paris",
            incorrect_answers: ["Treaty of Manila", "Pact of Biak-na-Bato", "Surrender sa Aguinaldo"]
        },
        {
            question: "Sino ang Pilipinong naging unang babaeng ministro ng Pilipinas?",
            correct_answer: "Maria Lourdes Sereno",
            incorrect_answers: ["Gloria Macapagal Arroyo", "Corazon Aquino", "Leni Robredo"]
        },
        {
            question: "Ano ang tawag sa batas na nagtatag ng sistemang pampulitika sa Pilipinas noong panahon ng Amerikano?",
            correct_answer: "Jones Act",
            incorrect_answers: ["Tydings-McDuffie Act", "Philippine Independence Act", "Bell Trade Act"]
        },
        {
            question: "Sino ang Pilipinong naging unang pangulo ng Republika ng Pilipinas pagkatapos ng World War II?",
            correct_answer: "Manuel Roxas",
            incorrect_answers: ["Sergio Osmeña", "Elpidio Quirino", "Carlos P. Garcia"]
        },
        {
            question: "Ano ang tawag sa dokumentong nagtatag ng unang pambansang lehislatura ng Pilipinas noong 1898?",
            correct_answer: "Malolos Congress",
            incorrect_answers: ["Philippine Assembly", "National Assembly", "Senate of the Philippines"]
        },
        {
            question: "Sino ang Pilipinong naging unang pangulo ng Unang Republika ng Pilipinas?",
            correct_answer: "Emilio Aguinaldo",
            incorrect_answers: ["Andres Bonifacio", "Apolinario Mabini", "Jose Rizal"]
        },
        {
            question: "Ano ang tawag sa kasunduan na nagbigay daan sa pagbabalik ng mga Pilipino mula Amerika patungong Pilipinas noong 1946?",
            correct_answer: "Philippine Independence",
            incorrect_answers: ["Treaty of Manila", "Tydings-McDuffie Act", "Jones Act"]
        },
        {
            question: "Sino ang Pilipinong pintor na kilala sa kanyang obra na 'Spoliarium'?",
            correct_answer: "Juan Luna",
            incorrect_answers: ["Fernando Amorsolo", "Felix Resurreccion Hidalgo", "Vicente Manansala"]
        },
        {
            question: "Ano ang tawag sa kasunduan na nagtatapos ng Digmaang Pilipino-Amerikano noong 1902?",
            correct_answer: "Surrender sa Aguinaldo",
            incorrect_answers: ["Kasunduan sa Paris", "Treaty of Manila", "Pact of Biak-na-Bato"]
        },
        {
            question: "Sino ang Pilipinong naging unang pangulo ng Pilipinas matapos ang EDSA People Power Revolution?",
            correct_answer: "Corazon Aquino",
            incorrect_answers: ["Ferdinand Marcos", "Fidel V. Ramos", "Joseph Estrada"]
        },
        {
            question: "Ano ang tawag sa dokumentong nagdedeklara ng kasarinlan ng Pilipinas mula sa Espanya?",
            correct_answer: "Deklarasyon ng Kalayaan",
            incorrect_answers: ["Pact of Biak-na-Bato", "Malolos Constitution", "Ang Bagong Lipunan"]
        },
        {
            question: "Sino ang lider ng Kilusang Labas na lumaban sa mga Hapones noong Ikalawang Digmaang Pandaigdig?",
            correct_answer: "Sergio Osmeña",
            incorrect_answers: ["Emilio Aguinaldo", "Andres Bonifacio", "Jose Rizal"]
        },
        {
            question: "Ano ang tawag sa panahon ng pamumuno ni Ferdinand Marcos na kilala sa deklarasyon ng Batas Militar?",
            correct_answer: "Martial Law Era",
            incorrect_answers: ["People Power Era", "Post-Colonial Era", "Commonwealth Period"]
        },
        {
            question: "Sino ang Pilipinong naging unang pangulo ng Republika ng Pilipinas pagkatapos ng World War II?",
            correct_answer: "Manuel Roxas",
            incorrect_answers: ["Sergio Osmeña", "Elpidio Quirino", "Carlos P. Garcia"]
        },
        {
            question: "Ano ang tawag sa kasunduan na nagbigay daan sa pagbabalik ng mga Pilipino mula Amerika patungong Pilipinas noong 1946?",
            correct_answer: "Philippine Independence",
            incorrect_answers: ["Treaty of Manila", "Tydings-McDuffie Act", "Jones Act"]
        },
        {
            question: "Sino ang Pilipinong nagtatag ng La Liga Filipina noong 1892?",
            correct_answer: "José Rizal",
            incorrect_answers: ["Andres Bonifacio", "Emilio Aguinaldo", "Apolinario Mabini"]
        },
        {
            question: "Ano ang tawag sa unang umiiral na saligang batas ng Pilipinas na naipasa noong 1899?",
            correct_answer: "Malolos Constitution",
            incorrect_answers: ["1935 Constitution", "1987 Constitution", "1898 Constitution"]
        },
        {
            question: "Sino ang lider ng Katipunan na kilala rin bilang 'Supremo'?",
            correct_answer: "Andres Bonifacio",
            incorrect_answers: ["Emilio Aguinaldo", "Apolinario Mabini", "Antonio Luna"]
        },
        {
            question: "Anong digmaan ang naganap mula 1941 hanggang 1945 na ikinonsidera ang malaking bahagi ng kasaysayan ng Pilipinas?",
            correct_answer: "Ikalawang Digmaang Pandaigdig",
            incorrect_answers: ["Unang Digmaang Pandaigdig", "Digmaang Pilipino-Amerikano", "Cold War"]
        },
        {
            question: "Sino ang unang Pilipinong naglingkod bilang Punong Ministro ng Pilipinas?",
            correct_answer: "Sergio Osmeña",
            incorrect_answers: ["Manuel L. Quezon", "José P. Laurel", "Carlos P. Garcia"]
        },
        {
            question: "Ano ang tawag sa batas na nagbigay ng edukasyon sa wikang Filipino noong 1935?",
            correct_answer: "Commonwealth Act No. 570",
            incorrect_answers: ["Batas Pambansa Blg. 86", "Republic Act No. 1425", "Presidential Decree No. 1552"]
        },
        {
            question: "Saan isinagawa ang unang eleksyon ng Pilipinas na may pananagutan sa buong bansa noong 1941?",
            correct_answer: "Bataan",
            incorrect_answers: ["Manila", "Cebu", "Davao"]
        },
        {
            question: "Ano ang pangalan ng unang umiiral na unibersidad sa Pilipinas na itinatag noong 1611?",
            correct_answer: "University of Santo Tomas",
            incorrect_answers: ["Ateneo de Manila University", "San Beda University", "Far Eastern University"]
        },
        {
            question: "Sino ang Pilipinong pintor na kilala sa kanyang likhang-sining na 'Spoliarium'?",
            correct_answer: "Juan Luna",
            incorrect_answers: ["Fernando Amorsolo", "Felix Resurreccion Hidalgo", "Vicente Manansala"]
        },
        {
            question: "Ano ang tawag sa dokumento na nagdedeklara ng kasarinlan ng Pilipinas mula sa Espanya noong Hunyo 12, 1898?",
            correct_answer: "Deklarasyon ng Kalayaan",
            incorrect_answers: ["Constituent Assembly", "Malolos Declaration", "Biak-na-Bato Document"]
        },
        {
            question: "Sino ang lider ng Katipunan na tumakbo bilang pangulo ng unang Republika ng Pilipinas?",
            correct_answer: "Emilio Aguinaldo",
            incorrect_answers: ["Andres Bonifacio", "Jose Rizal", "Apolinario Mabini"]
        },
        {
            question: "Ano ang tawag sa unang pambansang watawat ng Pilipinas na ipinakita noong Hunyo 12, 1898?",
            correct_answer: "Flag ng Katipunan",
            incorrect_answers: ["Flag ng Malolos", "Flag ng Unang Republika", "Flag ng Pambansang Sandaang Taon"]
        }
    ],
    lokasyon: [
                    {
                        "question": "Anong isla sa Pilipinas ang may pinakamahabang limestone karst na hindi pa nabubuksan sa turismo?",
                        "correct_answer": "Samal Island, Davao del Norte",
                        "incorrect_answers": ["Calaguas Island, Camarines Norte", "Balabac Island, Palawan", "Calaguas Island, Catanduanes"]
                    },
                    {
                        "question": "Saan matatagpuan ang Malagos Garden Resort, na kilala sa mga rare na orchids at butterfly sanctuary?",
                        "correct_answer": "Davao City",
                        "incorrect_answers": ["Cebu City", "Manila", "Iloilo City"]
                    },
                    {
                        "question": "Ano ang pangalan ng pinakamalawak na coral reef system sa Pilipinas na matatagpuan sa Sulu Sea?",
                        "correct_answer": "Tubbataha Reefs Natural Park",
                        "incorrect_answers": ["Apo Reef Natural Park", "Balicasag Marine Sanctuary", "Puerto Princesa Subterranean River"]
                    },
                    {
                        "question": "Saan matatagpuan ang mga Hanging Coffins na kilala bilang 'Punggol'?",
                        "correct_answer": "Sagada, Mountain Province",
                        "incorrect_answers": ["Lubuagan, Kalinga", "Bontoc, Mountain Province", "Itogon, Benguet"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na bahay sa Ilocos Sur na gawa sa bato at may mga intricate na ukit?",
                        "correct_answer": "Vigan Heritage House",
                        "incorrect_answers": ["Bahay na Bato", "Torogan", "Bahay Kubo"]
                    },
                    {
                        "question": "Saan matatagpuan ang Malasag Spring Natural Park na kilala sa crystal-clear na tubig at mga natural pools?",
                        "correct_answer": "Basilan",
                        "incorrect_answers": ["Camiguin", "Samar", "Biliran"]
                    },
                    {
                        "question": "Ano ang pangalan ng lihim na mga kanal na matatagpuan sa Intramuros, Manila?",
                        "correct_answer": "Catacombs of Intramuros",
                        "incorrect_answers": ["Pasig River Channels", "Manila Underground Tunnels", "Intramuros Sewers"]
                    },
                    {
                        "question": "Saan matatagpuan ang Bicol University Museum na naglalaman ng mga pre-colonial artifacts?",
                        "correct_answer": "Legazpi City, Albay",
                        "incorrect_answers": ["Daet, Camarines Norte", "Naga City, Camarines Sur", "Ligao City, Albay"]
                    },
                    {
                        "question": "Ano ang tawag sa mala-alpaka na tanawin na matatagpuan sa Bukidnon?",
                        "correct_answer": "Binangonan Circle",
                        "incorrect_answers": ["Mahogany Forest", "Lake Sebu", "Tinuy-an Falls"]
                    },
                    {
                        "question": "Saan matatagpuan ang Malapascua Island na kilala sa thresher sharks?",
                        "correct_answer": "Cebu",
                        "incorrect_answers": ["Palawan", "Siargao", "Bohol"]
                    },
                    {
                        "question": "Ano ang pangalan ng tradisyunal na sayaw ng mga Ifugao na nagpapakita ng agrikultura?",
                        "correct_answer": "Tinikling",
                        "incorrect_answers": ["Singkil", "Pandanggo sa Ilaw", "Sadsad"]
                    },
                    {
                        "question": "Saan matatagpuan ang Sagada's Echo Valley na mayroong natural na echo phenomenon?",
                        "correct_answer": "Sagada, Mountain Province",
                        "incorrect_answers": ["Baguio City", "Bukidnon", "Benguet"]
                    },
                    {
                        "question": "Ano ang tawag sa sinaunang sistema ng irigasyon na matatagpuan sa Batangas?",
                        "correct_answer": "Kaisipan",
                        "incorrect_answers": ["Bayanihan", "Tinapa", "Silong"]
                    },
                    {
                        "question": "Saan matatagpuan ang Agusan Marsh Wildlife Sanctuary na kilala sa malawak na biodiversity?",
                        "correct_answer": "Agusan del Sur",
                        "incorrect_answers": ["Davao del Norte", "Surigao del Sur", "Misamis Oriental"]
                    },
                    {
                        "question": "Ano ang tawag sa malawak na deltas na matatagpuan sa Iligan City?",
                        "correct_answer": "Maitum River Delta",
                        "incorrect_answers": ["Agusan River Delta", "Cagayan River Delta", "Pasig River Delta"]
                    },
                    {
                        "question": "Saan matatagpuan ang mga petroglyphs na matagal nang sinusuri ng mga arkeologo?",
                        "correct_answer": "Tabon Caves, Palawan",
                        "incorrect_answers": ["Callao Cave, Cagayan", "Lucban Caves, Quezon", "Banaue Caves, Ifugao"]
                    },
                    {
                        "question": "Ano ang pangalan ng pinakamataas na talon sa Pilipinas na matatagpuan sa Bukidnon?",
                        "correct_answer": "Tinago Falls",
                        "incorrect_answers": ["Maria Cristina Falls", "Pagsanjan Falls", "Aliwagwag Falls"]
                    },
                    {
                        "question": "Saan matatagpuan ang 7 Seas Water Park na kilala sa pinakamalawak na water slides sa Pilipinas?",
                        "correct_answer": "Cebu",
                        "incorrect_answers": ["Davao", "Manila", "Iloilo"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na porma ng sining sa Pangasinan na gumagamit ng bamboo?",
                        "correct_answer": "Salakot",
                        "incorrect_answers": ["Tinikling", "Singkil", "Kalinga"]
                    },
                    {
                        "question": "Saan matatagpuan ang Lake Mainit na kilala sa geothermal activity?",
                        "correct_answer": "Eastern Visayas",
                        "incorrect_answers": ["Ilocos Region", "Bicol Region", "Central Luzon"]
                    },
                    {
                        "question": "Ano ang tawag sa sinaunang uri ng palayok na matatagpuan sa Ifugao?",
                        "correct_answer": "Tongal",
                        "incorrect_answers": ["Palayok", "Banga", "Burong"]
                    },
                    {
                        "question": "Saan matatagpuan ang Hinatuan Cave na mayroong underground river?",
                        "correct_answer": "Surigao del Sur",
                        "incorrect_answers": ["Davao del Sur", "Agusan del Sur", "Cebu"]
                    },
                    {
                        "question": "Ano ang pangalan ng kultura ng mga lumad sa Mindanao na kilala sa kanilang weaving?",
                        "correct_answer": "T'boli",
                        "incorrect_answers": ["Manobo", "Bagobo", "Maguindanao"]
                    },
                    {
                        "question": "Saan matatagpuan ang langgam na kilala bilang 'whispering ants' na may kakaibang katangian?",
                        "correct_answer": "Sagada, Mountain Province",
                        "incorrect_answers": ["Benguet", "Bukidnon", "Ilocos Norte"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na barko ng mga Tausug na matatagpuan sa Sulu Archipelago?",
                        "correct_answer": "Vinta",
                        "incorrect_answers": ["Paraw", "Balangay", "Bangkero"]
                    },
                    {
                        "question": "Saan matatagpuan ang Bagobo Highlands na kilala sa kanilang traditional weaving?",
                        "correct_answer": "Davao del Sur",
                        "incorrect_answers": ["Davao del Norte", "Cotabato", "Surigao del Sur"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na sayaw ng mga Igorot na nagpapakita ng kanilang pakikipaglaban?",
                        "correct_answer": "Banga",
                        "incorrect_answers": ["Singkil", "Tinikling", "Pandanggo sa Ilaw"]
                    },
                    {
                        "question": "Saan matatagpuan ang Kamangyan Falls na kilala sa malamig na tubig?",
                        "correct_answer": "Mt. Kitanglad Range Natural Park, Bukidnon",
                        "incorrect_answers": ["Tinuy-an Falls, Surigao del Sur", "Maria Cristina Falls, Iligan", "Aliwagwag Falls, Surigao del Sur"]
                    },
                    {
                        "question": "Ano ang pangalan ng pinakamahabang tulay sa Pilipinas na matatagpuan sa Zamboanga del Norte?",
                        "correct_answer": "Dapitan-Maasin Bridge",
                        "incorrect_answers": ["San Juanico Bridge", "Bamboo Bridge", "Makati-Pasay Bridge"]
                    },
                    {
                        "question": "Saan matatagpuan ang Mount Hamiguitan Range Wildlife Sanctuary na isang UNESCO World Heritage Site?",
                        "correct_answer": "Davao Oriental",
                        "incorrect_answers": ["Davao del Norte", "Davao Occidental", "Davao del Sur"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na kasuotan ng mga Visayan na gawa sa hinabing tela?",
                        "correct_answer": "Barong Tagalog",
                        "incorrect_answers": ["Kimona", "Balintawak", "Terno"]
                    },
                    {
                        "question": "Saan matatagpuan ang Sikaran Festival na nagpapakita ng tradisyunal na sayaw at pakikipaglaban?",
                        "correct_answer": "Marinduque",
                        "incorrect_answers": ["Iloilo", "Cebu", "Negros Occidental"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na paraan ng paghahabi ng tapis sa Bohol?",
                        "correct_answer": "Weaving",
                        "incorrect_answers": ["Knitting", "Crocheting", "Spinning"]
                    },
                    {
                        "question": "Saan matatagpuan ang mga sinaunang bato na kilala bilang 'rock formations' sa Batanes?",
                        "correct_answer": "Basco",
                        "incorrect_answers": ["Sabtang", "Itbayat", "Uyugan"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na barkong pandagat ng mga Ilocano na ginagamit sa pangingisda?",
                        "correct_answer": "Balangay",
                        "incorrect_answers": ["Vinta", "Paraw", "Bangka"]
                    },
                    {
                        "question": "Saan matatagpuan ang Macahambus Cave Systems na kilala sa mga stalactites at stalagmites?",
                        "correct_answer": "Bohol",
                        "incorrect_answers": ["Palawan", "Cebu", "Ilocos Norte"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na palamuti ng buhok ng mga Ifugao?",
                        "correct_answer": "Banga",
                        "incorrect_answers": ["Sungka", "Salakot", "Panyo"]
                    },
                    {
                        "question": "Saan matatagpuan ang mga sinaunang bato na kilala bilang 'Banaue'?",
                        "correct_answer": "Ifugao",
                        "incorrect_answers": ["Benguet", "Ilocos Norte", "Abra"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na pamahiin ng mga Tagalog tungkol sa kalikasan?",
                        "correct_answer": "Anito",
                        "incorrect_answers": ["Manananggal", "Tikbalang", "Kapre"]
                    },
                    {
                        "question": "Saan matatagpuan ang mga sinaunang sementeryo ng mga Sugboanon na kilala bilang 'Tomb of the Unknown Soldier'?",
                        "correct_answer": "Cebu City",
                        "incorrect_answers": ["Manila", "Davao", "Iloilo"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na awitin ng mga Waray na karaniwang inaawit sa panahon ng fiesta?",
                        "correct_answer": "Kanaway",
                        "incorrect_answers": ["Kundiman", "Balitaw", "Tinikling"]
                    },
                    {
                        "question": "Saan matatagpuan ang mga sinaunang palasyo ng mga Sultan sa Mindanao na kilala bilang 'Sultanate Palaces'?",
                        "correct_answer": "Sulu Archipelago",
                        "incorrect_answers": ["Cotabato", "Zamboanga", "Davao"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na ritwal ng mga Lumad na nagpapakita ng pasasalamat sa mga diyos?",
                        "correct_answer": "Kundiman",
                        "incorrect_answers": ["Salakot", "Tinikling", "Pamahalaan"]
                    },
                    {
                        "question": "Saan matatagpuan ang mga sinaunang bato na kilala bilang 'Batad Rice Terraces'?",
                        "correct_answer": "Ifugao",
                        "incorrect_answers": ["Benguet", "Ilocos Sur", "Kalinga"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na palamuti ng mga Tagalog na gawa sa beads at sinulid?",
                        "correct_answer": "Panyo",
                        "incorrect_answers": ["Salakot", "Banga", "Tinikling"]
                    },
                    {
                        "question": "Saan matatagpuan ang mga sinaunang bundok na kilala bilang 'Mt. Kitanglad Range'?",
                        "correct_answer": "Bukidnon",
                        "incorrect_answers": ["Benguet", "Cagayan", "Abra"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na larong Pilipino na gumagamit ng kahoy at plastik na piraso?",
                        "correct_answer": "Sungka",
                        "incorrect_answers": ["Tumbang Preso", "Patintero", "Luksong Tinik"]
                    },
                    {
                        "question": "Saan matatagpuan ang mga sinaunang bato na kilala bilang 'Panagbenga'?",
                        "correct_answer": "Baguio City",
                        "incorrect_answers": ["Cebu City", "Davao City", "Manila"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na ritwal ng mga Tagalog na nagpapakita ng pagkakaisa at bayanihan?",
                        "correct_answer": "Bayanihan",
                        "incorrect_answers": ["Kundiman", "Salakot", "Tinikling"]
                    },
                    {
                        "question": "Saan matatagpuan ang mga sinaunang palasyo ng mga Ifugao na kilala bilang 'Banaue Palaces'?",
                        "correct_answer": "Ifugao",
                        "incorrect_answers": ["Benguet", "Ilocos Sur", "Kalinga"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na sayaw ng mga Waray na karaniwang ginagawa sa tabi ng ilog?",
                        "correct_answer": "Sayaw sa Bangko",
                        "incorrect_answers": ["Singkil", "Tinikling", "Pandanggo"]
                    },
                    {
                        "question": "Saan matatagpuan ang mga sinaunang bato na kilala bilang 'Masungi Georeserve'?",
                        "correct_answer": "Rizal",
                        "incorrect_answers": ["Laguna", "Batangas", "Quezon"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na palamuti ng mga Tagalog na gawa sa muslin at mga palamuti?",
                        "correct_answer": "Terno",
                        "incorrect_answers": ["Panyo", "Salakot", "Banga"]
                    },
                    {
                        "question": "Saan matatagpuan ang mga sinaunang bato na kilala bilang 'Pulangbato'?",
                        "correct_answer": "Quezon",
                        "incorrect_answers": ["Laguna", "Batangas", "Cavite"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na ritwal ng mga Lumad na nagpapakita ng paghahanda para sa ani?",
                        "correct_answer": "Anito",
                        "incorrect_answers": ["Bayanihan", "Kundiman", "Salakot"]
                    },
                    {
                        "question": "Saan matatagpuan ang mga sinaunang bato na kilala bilang 'Mount Hamiguitan'?",
                        "correct_answer": "Davao Oriental",
                        "incorrect_answers": ["Davao del Norte", "Davao Occidental", "Davao del Sur"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na sayaw ng mga Igorot na nagpapakita ng kanilang pakikipaglaban?",
                        "correct_answer": "Banga",
                        "incorrect_answers": ["Singkil", "Tinikling", "Pandanggo sa Ilaw"]
                    },
                    {
                        "question": "Saan matatagpuan ang mga sinaunang bato na kilala bilang 'Banaue Rice Terraces'?",
                        "correct_answer": "Ifugao",
                        "incorrect_answers": ["Benguet", "Ilocos Norte", "Abra"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na palamuti ng mga Ifugao na gawa sa bulaklak at dahon?",
                        "correct_answer": "Banga",
                        "incorrect_answers": ["Panyo", "Salakot", "Tinikling"]
                    },
                    {
                        "question": "Saan matatagpuan ang mga sinaunang bundok na kilala bilang 'Mount Kitanglad'?",
                        "correct_answer": "Bukidnon",
                        "incorrect_answers": ["Benguet", "Cagayan", "Abra"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na ritwal ng mga Tagalog na nagpapakita ng pagkakaisa at bayanihan?",
                        "correct_answer": "Bayanihan",
                        "incorrect_answers": ["Kundiman", "Salakot", "Tinikling"]
                    },
                    {
                        "question": "Saan matatagpuan ang mga sinaunang bato na kilala bilang 'Banaue Palaces'?",
                        "correct_answer": "Ifugao",
                        "incorrect_answers": ["Benguet", "Ilocos Sur", "Kalinga"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na sayaw ng mga Waray na karaniwang ginagawa sa tabi ng ilog?",
                        "correct_answer": "Sayaw sa Bangko",
                        "incorrect_answers": ["Singkil", "Tinikling", "Pandanggo"]
                    },
                    {
                        "question": "Saan matatagpuan ang mga sinaunang bato na kilala bilang 'Masungi Georeserve'?",
                        "correct_answer": "Rizal",
                        "incorrect_answers": ["Laguna", "Batangas", "Quezon"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na palamuti ng mga Tagalog na gawa sa muslin at mga palamuti?",
                        "correct_answer": "Terno",
                        "incorrect_answers": ["Panyo", "Salakot", "Banga"]
                    },
                    {
                        "question": "Saan matatagpuan ang mga sinaunang bato na kilala bilang 'Pulangbato' ?",
                        "correct_answer": "Quezon",
                        "incorrect_answers": ["Laguna", "Batangas", "Cavite"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na ritwal ng mga Lumad na nagpapakita ng paghahanda para sa ani?",
                        "correct_answer": "Anito",
                        "incorrect_answers": ["Bayanihan", "Kundiman", "Salakot"]
                    },
                    {
                        "question": "Saan matatagpuan ang mga sinaunang bato na kilala bilang 'Mount Hamiguitan'?",
                        "correct_answer": "Davao Oriental",
                        "incorrect_answers": ["Davao del Norte", "Davao Occidental", "Davao del Sur"]
                    },
                    {
                        "question": "Ano ang tawag sa tradisyunal na sayaw ng mga Igorot na nagpapakita ng kanilang pakikipaglaban?",
                        "correct_answer": "Banga",
                        "incorrect_answers": ["Singkil", "Tinikling", "Pandanggo sa Ilaw"]
                    }
    ],
    musika: [
        {
            question: "Anong instrumento ang kilala bilang 'king of instruments' sa classical music?",
            correct_answer: "Organ",
            incorrect_answers: ["Piano", "Violin", "Trumpet"]
        },
        {
            question: "Anong term ang ginagamit para sa 7/8 time signature sa musika?",
            correct_answer: "Irregular Meter",
            incorrect_answers: ["Simple Meter", "Compound Meter", "Complex Meter"]
        },
        {
            question: "Sino ang kompositor ng opera na 'La Traviata'?",
            correct_answer: "Giuseppe Verdi",
            incorrect_answers: ["Giacomo Puccini", "Richard Wagner", "Georges Bizet"]
        }
        // Add more hard questions for musika...
    ]
};
