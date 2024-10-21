const easyQuestions = {
    kasaysayan: [
        {
            question: "Sino ang unang presidente ng Pilipinas?",
            correct_answer: "Emilio Aguinaldo",
            incorrect_answers: ["Jose Rizal", "Andres Bonifacio", "Manuel Quezon"]
        },
        {
            question: "Kailan nagdeklara ng kalayaan ang Pilipinas mula sa Espanya?",
            correct_answer: "Hunyo 12, 1898",
            incorrect_answers: ["Abril 30, 1898", "Disyembre 25, 1898", "Setyembre 1, 1898"]
        },
        {
            question: "Sino ang kilalang bayani na may pen name na 'Laong Laan'?",
            correct_answer: "Jose Rizal",
            incorrect_answers: ["Andres Bonifacio", "Apolinario Mabini", "Emilio Jacinto"]
        }
        // Add more easy questions for kasaysayan...
    ],
    lokasyon: [
        { 
                    "question": "Saan matatagpuan ang Banaue Rice Terraces?",
                    "correct_answer": "Ifugao",
                    "incorrect_answers": ["Benguet", "Batangas", "Palawan"]
                },
                {
                    "question": "Anong lungsod ang tinaguriang 'Summer Capital' ng Pilipinas?",
                    "correct_answer": "Baguio City",
                    "incorrect_answers": ["Tagaytay City", "Sagada", "La Trinidad"]
                },
                {
                    "question": "Saan matatagpuan ang Chocolate Hills?",
                    "correct_answer": "Bohol",
                    "incorrect_answers": ["Cebu", "Negros Occidental", "Leyte"]
                },
                {
                    "question": "Anong isla ang kilala bilang 'Island Garden City of Samal'?",
                    "correct_answer": "Davao del Norte",
                    "incorrect_answers": ["Cebu", "Palawan", "Boracay"]
                },
                {
                    "question": "Saan matatagpuan ang Taal Volcano?",
                    "correct_answer": "Batangas",
                    "incorrect_answers": ["Cavite", "Laguna", "Quezon"]
                },
                {
                    "question": "Anong probinsya ang kilala sa Pinakbet Festival?",
                    "correct_answer": "Ilocos Sur",
                    "incorrect_answers": ["Pangasinan", "La Union", "Ilocos Norte"]
                },
                {
                    "question": "Saan matatagpuan ang Mayon Volcano?",
                    "correct_answer": "Albay",
                    "incorrect_answers": ["Sorsogon", "Camarines Sur", "Catanduanes"]
                },
                {
                    "question": "Anong lungsod ang kilala sa Sinulog Festival?",
                    "correct_answer": "Cebu City",
                    "incorrect_answers": ["Davao City", "Iloilo City", "Bacolod City"]
                },
                {
                    "question": "Saan matatagpuan ang Puerto Princesa Subterranean River?",
                    "correct_answer": "Palawan",
                    "incorrect_answers": ["Mindoro", "Cebu", "Bohol"]
                },
                {
                    "question": "Anong isla ang kilala sa mga puting buhangin at diving spots?",
                    "correct_answer": "Boracay",
                    "incorrect_answers": ["Siargao", "Panglao", "Coron"]
                },
                {
                    "question": "Saan matatagpuan ang Rizal Park?",
                    "correct_answer": "Maynila",
                    "incorrect_answers": ["Quezon City", "Cebu City", "Davao City"]
                },
                {
                    "question": "Anong lalawigan ang kilala sa Vigan Heritage Village?",
                    "correct_answer": "Ilocos Sur",
                    "incorrect_answers": ["Pangasinan", "La Union", "Ilocos Norte"]
                },
                {
                    "question": "Saan matatagpuan ang Mt. Pulag, ang ikatlong pinakamataas na bundok sa Pilipinas?",
                    "correct_answer": "Benguet",
                    "incorrect_answers": ["Abra", "Ifugao", "Cagayan"]
                },
                {
                    "question": "Anong lungsod ang kilala sa Pahiyas Festival?",
                    "correct_answer": "Lucban",
                    "incorrect_answers": ["Antipolo", "Angono", "San Fernando"]
                },
                {
                    "question": "Saan matatagpuan ang Enchanted River?",
                    "correct_answer": "Surigao del Sur",
                    "incorrect_answers": ["Davao del Sur", "Zamboanga del Norte", "Cebu"]
                },
                {
                    "question": "Anong isla ang kilala sa whale shark interactions?",
                    "correct_answer": "Oslob, Cebu",
                    "incorrect_answers": ["Puerto Galera, Mindoro", "Daanbantayan, Cebu", "Panglao, Bohol"]
                },
                {
                    "question": "Saan matatagpuan ang Tubbataha Reef?",
                    "correct_answer": "Sulu Sea",
                    "incorrect_answers": ["Philippine Sea", "South China Sea", "Celebes Sea"]
                },
                {
                    "question": "Anong probinsya ang kilala sa Hundred Islands National Park?",
                    "correct_answer": "Pangasinan",
                    "incorrect_answers": ["Zambales", "Albay", "Batangas"]
                },
                {
                    "question": "Saan matatagpuan ang Magellan's Cross?",
                    "correct_answer": "Cebu City",
                    "incorrect_answers": ["Manila", "Iloilo City", "Davao City"]
                },
                {
                    "question": "Anong lungsod ang kilala sa Kadayawan Festival?",
                    "correct_answer": "Davao City",
                    "incorrect_answers": ["Cebu City", "Zamboanga City", "Bacolod City"]
                },
                {
                    "question": "Saan matatagpuan ang Malapascua Island?",
                    "correct_answer": "Cebu",
                    "incorrect_answers": ["Bohol", "Siargao", "Palawan"]
                },
                {
                    "question": "Anong lalawigan ang kilala sa Paoay Church?",
                    "correct_answer": "Ilocos Norte",
                    "incorrect_answers": ["Ilocos Sur", "La Union", "Pangasinan"]
                },
                {
                    "question": "Saan matatagpuan ang Camiguin Island na kilala sa White Island?",
                    "correct_answer": "Camiguin",
                    "incorrect_answers": ["Bohol", "Siargao", "Negros Oriental"]
                },
                {
                    "question": "Anong lungsod ang kilala sa heritage house at Calle Crisologo?",
                    "correct_answer": "Vigan",
                    "incorrect_answers": ["Baguio", "Manila", "Cebu"]
                },
                {
                    "question": "Saan matatagpuan ang Hinatuan Enchanted River?",
                    "correct_answer": "Surigao del Sur",
                    "incorrect_answers": ["Davao del Norte", "Agusan del Sur", "Cebu"]
                },
                {
                    "question": "Anong isla ang kilala sa surf spots tulad ng Cloud 9?",
                    "correct_answer": "Siargao",
                    "incorrect_answers": ["Baler", "La Union", "Zambales"]
                },
                {
                    "question": "Saan matatagpuan ang Malacañang Palace?",
                    "correct_answer": "Maynila",
                    "incorrect_answers": ["Quezon City", "Cebu City", "Davao City"]
                },
                {
                    "question": "Anong probinsya ang kilala sa Sagada at mga hanging coffins?",
                    "correct_answer": "Benguet",
                    "incorrect_answers": ["Ifugao", "Kalinga", "Apayao"]
                },
                {
                    "question": "Saan matatagpuan ang Fort Santiago?",
                    "correct_answer": "Manila",
                    "incorrect_answers": ["Cebu", "Davao", "Iloilo"]
                },
                {
                    "question": "Anong isla ang kilala sa Japanese shipwreck diving?",
                    "correct_answer": "Coron, Palawan",
                    "incorrect_answers": ["Puerto Princesa, Palawan", "El Nido, Palawan", "Bohol"]
                },
                {
                    "question": "Saan matatagpuan ang San Agustin Church na isang UNESCO World Heritage Site?",
                    "correct_answer": "Manila",
                    "incorrect_answers": ["Vigan", "Cebu", "Iloilo"]
                },
                {
                    "question": "Anong lalawigan ang kilala sa Lake Sebu?",
                    "correct_answer": "South Cotabato",
                    "incorrect_answers": ["Mindanao", "Bukidnon", "Davao del Sur"]
                },
                {
                    "question": "Saan matatagpuan ang Rizal Shrine na tahanan ni Jose Rizal?",
                    "correct_answer": "Calamba, Laguna",
                    "incorrect_answers": ["Binan, Laguna", "Manila", "Batangas"]
                },
                {
                    "question": "Anong lungsod ang kilala sa White Beach?",
                    "correct_answer": "Boracay",
                    "incorrect_answers": ["Panglao", "El Nido", "Puerto Galera"]
                },
                {
                    "question": "Saan matatagpuan ang Mactan Shrine?",
                    "correct_answer": "Cebu",
                    "incorrect_answers": ["Manila", "Davao", "Iloilo"]
                },
                {
                    "question": "Anong probinsya ang kilala sa Apo Reef Natural Park?",
                    "correct_answer": "Mindoro Occidental",
                    "incorrect_answers": ["Palawan", "Camarines Sur", "Samar"]
                },
                {
                    "question": "Saan matatagpuan ang Basilica Minore del Santo Niño?",
                    "correct_answer": "Cebu City",
                    "incorrect_answers": ["Manila", "Davao City", "Iloilo City"]
                },
                {
                    "question": "Anong isla ang kilala sa Lake Taal?",
                    "correct_answer": "Luzon",
                    "incorrect_answers": ["Visayas", "Mindanao", "Palawan"]
                },
                {
                    "question": "Saan matatagpuan ang Fort Bonifacio?",
                    "correct_answer": "Taguig, Metro Manila",
                    "incorrect_answers": ["Quezon City", "Makati", "Pasig"]
                },
                {
                    "question": "Anong lungsod ang kilala sa Paoay Sand Dunes?",
                    "correct_answer": "Pangasinan",
                    "incorrect_answers": ["Ilocos Norte", "Ilocos Sur", "La Union"]
                },
                {
                    "question": "Saan matatagpuan ang Bantayan Island?",
                    "correct_answer": "Cebu",
                    "incorrect_answers": ["Bohol", "Negros Occidental", "Siquijor"]
                },
                {
                    "question": "Anong probinsya ang kilala sa Mahogany Forest?",
                    "correct_answer": "Bukidnon",
                    "incorrect_answers": ["Misamis Oriental", "Davao del Norte", "Agusan del Norte"]
                },
                {
                    "question": "Saan matatagpuan ang Sto. Niño de Cebu?",
                    "correct_answer": "Cebu City",
                    "incorrect_answers": ["Manila", "Davao City", "Iloilo City"]
                },
                {
                    "question": "Anong isla ang kilala sa Naked Island?",
                    "correct_answer": "El Nido, Palawan",
                    "incorrect_answers": ["Coron, Palawan", "Cebu", "Bohol"]
                },
                {
                    "question": "Saan matatagpuan ang Quiapo Church?",
                    "correct_answer": "Manila",
                    "incorrect_answers": ["Quezon City", "Cebu", "Davao City"]
                },
                {
                    "question": "Anong lalawigan ang kilala sa Mount Apo?",
                    "correct_answer": "Davao del Sur",
                    "incorrect_answers": ["Cebu", "Bukidnon", "Zamboanga del Sur"]
                },
                {
                    "question": "Saan matatagpuan ang Fort Pilar?",
                    "correct_answer": "Zamboanga City",
                    "incorrect_answers": ["Manila", "Cebu", "Davao City"]
                },
                {
                    "question": "Anong lungsod ang kilala sa Fort Santiago?",
                    "correct_answer": "Manila",
                    "incorrect_answers": ["Cebu", "Davao", "Iloilo"]
                },
                {
                    "question": "Saan matatagpuan ang Paoay Church?",
                    "correct_answer": "Ilocos Norte",
                    "incorrect_answers": ["Ilocos Sur", "La Union", "Pangasinan"]
                },
                {
                    "question": "Anong isla ang kilala sa Hinatuan Enchanted River?",
                    "correct_answer": "Mindanao",
                    "incorrect_answers": ["Luzon", "Visayas", "Palawan"]
                },
                {
                    "question": "Saan matatagpuan ang Corregidor Island?",
                    "correct_answer": "Cavite",
                    "incorrect_answers": ["Batangas", "Quezon", "Rizal"]
                },
                {
                    "question": "Anong lungsod ang kilala sa Bohol-Panglao tour?",
                    "correct_answer": "Tagbilaran",
                    "incorrect_answers": ["Loboc", "Sikatuna", "Anda"]
                },
                {
                    "question": "Saan matatagpuan ang Malacañang Park?",
                    "correct_answer": "Vigan, Ilocos Sur",
                    "incorrect_answers": ["Manila", "Baguio", "Cebu"]
                },
                {
                    "question": "Anong probinsya ang kilala sa Tinuy-an Falls?",
                    "correct_answer": "Surigao del Sur",
                    "incorrect_answers": ["Agusan del Sur", "Davao del Norte", "Bukidnon"]
                },
                {
                    "question": "Saan matatagpuan ang Sto. Tomas de Villanueva Parish Church?",
                    "correct_answer": "Vigan, Ilocos Sur",
                    "incorrect_answers": ["Manila", "Cebu", "Bacolod"]
                },
                {
                    "question": "Anong isla ang kilala sa Bulabog Putian National Park?",
                    "correct_answer": "Samar",
                    "incorrect_answers": ["Leyte", "Bohol", "Mindoro"]
                },
                {
                    "question": "Saan matatagpuan ang Panagbenga Festival?",
                    "correct_answer": "Baguio City",
                    "incorrect_answers": ["Tagaytay City", "Cebu City", "Davao City"]
                },
                {
                    "question": "Anong probinsya ang kilala sa Bulkang Taal?",
                    "correct_answer": "Batangas",
                    "incorrect_answers": ["Cavite", "Laguna", "Quezon"]
                },
                {
                    "question": "Saan matatagpuan ang Rizal Monument?",
                    "correct_answer": "Luneta Park, Manila",
                    "incorrect_answers": ["Quezon City", "Cebu", "Davao"]
                },
                {
                    "question": "Anong lungsod ang kilala sa Dinagyang Festival?",
                    "correct_answer": "Iloilo City",
                    "incorrect_answers": ["Cebu City", "Davao City", "Bacolod City"]
                },
                {
                    "question": "Saan matatagpuan ang Sumaguing Cave?",
                    "correct_answer": "Sagada, Mountain Province",
                    "incorrect_answers": ["Palawan", "Cebu", "Bohol"]
                },
                {
                    "question": "Anong probinsya ang kilala sa Sarangani Bay?",
                    "correct_answer": "Sarangani",
                    "incorrect_answers": ["Surigao del Sur", "Zamboanga del Sur", "Cebu"]
                },
                {
                    "question": "Saan matatagpuan ang Pagsanjan Falls?",
                    "correct_answer": "Laguna",
                    "incorrect_answers": ["Batangas", "Quezon", "Rizal"]
                },
                {
                    "question": "Anong isla ang kilala sa Tubbataha Reefs Natural Park?",
                    "correct_answer": "Palawan",
                    "incorrect_answers": ["Cebu", "Bohol", "Mindoro"]
                },
                {
                    "question": "Saan matatagpuan ang Heritage Village ng Vigan?",
                    "correct_answer": "Ilocos Sur",
                    "incorrect_answers": ["Ilocos Norte", "La Union", "Pangasinan"]
                },
                {
                    "question": "Anong lungsod ang kilala sa La Mesa Eco Park?",
                    "correct_answer": "Quezon City",
                    "incorrect_answers": ["Manila", "Cebu", "Davao"]
                },
                {
                    "question": "Saan matatagpuan ang Basilica del Santo Niño?",
                    "correct_answer": "Cebu City",
                    "incorrect_answers": ["Manila", "Davao City", "Iloilo City"]
                },
                {
                    "question": "Anong probinsya ang kilala sa White Island?",
                    "correct_answer": "Camiguin",
                    "incorrect_answers": ["Bohol", "Siargao", "Palawan"]
                },
                {
                    "question": "Saan matatagpuan ang Fort San Pedro?",
                    "correct_answer": "Cebu City",
                    "incorrect_answers": ["Manila", "Davao", "Iloilo"]
                },
                {
                    "question": "Anong lungsod ang kilala sa Pista ng Nuestra Señora de la Regla?",
                    "correct_answer": "Dumaguete",
                    "incorrect_answers": ["Cebu City", "Bacolod City", "Iloilo City"]
                },
                {
                    "question": "Saan matatagpuan ang Rizal Shrine sa Calamba?",
                    "correct_answer": "Laguna",
                    "incorrect_answers": ["Batangas", "Quezon", "Cavite"]
                },
                {
                    "question": "Anong isla ang kilala sa Siargao's Cloud 9?",
                    "correct_answer": "Siargao",
                    "incorrect_answers": ["Boracay", "Palawan", "Cebu"]
                },
                {
                    "question": "Saan matatagpuan ang Binondo, na kilala bilang pinakamalaking Chinatown sa mundo?",
                    "correct_answer": "Manila",
                    "incorrect_answers": ["Cebu", "Davao", "Iloilo"]
                },
                {
                    "question": "Anong probinsya ang kilala sa Marinduque Moriones Festival?",
                    "correct_answer": "Marinduque",
                    "incorrect_answers": ["Bohol", "Leyte", "Samar"]
                },
                {
                    "question": "Saan matatagpuan ang Taal Heritage Town?",
                    "correct_answer": "Batangas",
                    "incorrect_answers": ["Laguna", "Quezon", "Cavite"]
                },
                {
                    "question": "Anong lungsod ang kilala sa Pescadores Island?",
                    "correct_answer": "Nasugbu, Batangas",
                    "incorrect_answers": ["Nasipit, Agusan del Norte", "Nasugbu, Cebu", "Nasipit, Palawan"]
                },
                {
                    "question": "Saan matatagpuan ang Mt. Apo na pinakamataas na bundok sa Pilipinas?",
                    "correct_answer": "Davao del Sur",
                    "incorrect_answers": ["Cebu", "Bukidnon", "Zamboanga del Sur"]
                },
                {
                    "question": "Anong isla ang kilala sa Pamalican Island?",
                    "correct_answer": "Samar",
                    "incorrect_answers": ["Leyte", "Bohol", "Mindoro"]
                },
                {
                    "question": "Saan matatagpuan ang Binangonan Parish Church?",
                    "correct_answer": "Rizal",
                    "incorrect_answers": ["Laguna", "Batangas", "Quezon"]
                },
                {
                    "question": "Anong probinsya ang kilala sa Mayon Volcano?",
                    "correct_answer": "Albay",
                    "incorrect_answers": ["Sorsogon", "Camarines Sur", "Catanduanes"]
                },
                {
                    "question": "Saan matatagpuan ang Sampaloc Lake?",
                    "correct_answer": "Manila",
                    "incorrect_answers": ["Quezon City", "Cebu", "Davao"]
                },
                {
                    "question": "Anong lungsod ang kilala sa Bantayan Island?",
                    "correct_answer": "Santa Fe, Cebu",
                    "incorrect_answers": ["Lapu-Lapu, Cebu", "Tagbilaran, Bohol", "Iloilo City"]
                },
                {
                    "question": "Saan matatagpuan ang Donsol na kilala sa whale sharks?",
                    "correct_answer": "Sorsogon",
                    "incorrect_answers": ["Cebu", "Leyte", "Palawan"]
                },
                {
                    "question": "Anong probinsya ang kilala sa Kaparkan Falls?",
                    "correct_answer": "Zambales",
                    "incorrect_answers": ["Pampanga", "Tarlac", "Bataan"]
                },
                {
                    "question": "Saan matatagpuan ang Malate Church?",
                    "correct_answer": "Manila",
                    "incorrect_answers": ["Quezon City", "Cebu", "Davao"]
                },
                {
                    "question": "Anong isla ang kilala sa Malapascua Island?",
                    "correct_answer": "Cebu",
                    "incorrect_answers": ["Bohol", "Siargao", "Palawan"]
                },
                {
                    "question": "Saan matatagpuan ang Vigan Cathedral?",
                    "correct_answer": "Vigan, Ilocos Sur",
                    "incorrect_answers": ["Manila", "Cebu", "Iloilo"]
                },
                {
                    "question": "Anong lungsod ang kilala sa Subic Bay Freeport Zone?",
                    "correct_answer": "Subic, Zambales",
                    "incorrect_answers": ["Olongapo, Zambales", "Batangas", "Manila"]
                },
                {
                    "question": "Saan matatagpuan ang Rizal Boulevard?",
                    "correct_answer": "Manila",
                    "incorrect_answers": ["Quezon City", "Cebu", "Davao"]
                },
                {
                    "question": "Anong probinsya ang kilala sa Tinago Falls?",
                    "correct_answer": "Batangas",
                    "incorrect_answers": ["Laguna", "Quezon", "Cavite"]
                },
                {
                    "question": "Saan matatagpuan ang Fort Santiago?",
                    "correct_answer": "Manila",
                    "incorrect_answers": ["Cebu", "Davao", "Iloilo"]
                }
    ],
    musika: [
        {
            question: "Anong instrumento ang may anim na string?",
            correct_answer: "Gitara",
            incorrect_answers: ["Biolin", "Flawta", "Tambol"]
        },
        {
            question: "Sino ang itinuturing na 'King of Pop'?",
            correct_answer: "Michael Jackson",
            incorrect_answers: ["Elvis Presley", "Prince", "Madonna"]
        },
        {
            question: "Ano ang tawag sa mataas na boses ng lalaki sa pagkanta?",
            correct_answer: "Tenor",
            incorrect_answers: ["Bass", "Alto", "Soprano"]
        }
        // Add more easy questions for musika...
    ]
};
