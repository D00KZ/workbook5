"use strict";

let peoples = [
  { id: 1, firstName: "Ezra", lastName: "Aiden", email: "e.aiden@basshall.com", ipAddress: "18.6.24.104" },
  { id: 2, firstName: "Ian", lastName: "Auston", email: "ian.auston@goldmansachs.com", ipAddress: "17.16.4.105" },
  { id: 3, firstName: "Siddalee", lastName: "Grace", email: "susa@time.com", ipAddress: "106.77.22.16" },
  { id: 4, firstName: "Elisha", lastName: "Aslan", email: "aslan-eli@eligames.com", ipAddress: "107.55.77.15" },
  { id: 5, firstName: "Pursalane", lastName: "Faye", email: "p.faye@tcu.edu", ipAddress: "109.12.22.12" },
  {
    id: 6,
    firstName: "Zephaniah",
    lastName: "Hughes",
    email: "zeph-hughes@analyze-ur-data.com",
    ipAddress: "10.1.5.12",
  },
  { id: 7, firstName: "Natalie", lastName: "Rachelle", email: "natalie.r@dallascollege.edu", ipAddress: "38.84.14.2" },
  { id: 8, firstName: "Brandon", lastName: "Plyers", email: "brandon-plyers@bpstudios.com", ipAddress: "4.104.84.38" },
  { id: 9, firstName: "Brittany", lastName: "Ray", email: "b-ray@hroutsource.com", ipAddress: "86.8.5.36" },
  { id: 10, firstName: "Zachary", lastName: "Westly", email: "zwestly@westly-pools.com", ipAddress: "32.5.20.90" },
  { id: 11, firstName: "Christina", lastName: "Fast", email: "ms.christina.fast@speced.edu", ipAddress: "27.8.93.5" },
  { id: 12, firstName: "Betty", lastName: "Smalltree", email: "bjs@bkidd.com", ipAddress: "34.12.8.60" },
  { id: 13, firstName: "Ralph", lastName: "Westly", email: "r-westly@gulfins.com", ipAddress: "53.26.7.28" },
  { id: 14, firstName: "Mary", lastName: "Fair", email: "mary.fair.1899@panflu.com", ipAddress: "30.6.99.89" },
  { id: 15, firstName: "Annabelle", lastName: "Guthrie", email: "annieb@gmail.com", ipAddress: "19.60.1.100" },
  { id: 16, firstName: "Gothie", lastName: "Capps", email: "gothie99@gmail.com", ipAddress: "19.60.1.101" },
];

window.onload = function () {
  //HTML Elements Varibles
  const peoplesInfoBody = document.querySelector("#peoplesInfoBody");

  //Functions
  function peoplesInfoTable() {
    for (const people of peoples) {
      let row = peoplesInfoBody.insertRow();

      let cell1 = row.insertCell(0);
      cell1.innerText = people.firstNameName;

      let cell2 = row.insertCell(1);
      cell2.innerText = people.lastNameName;

      let cell3 = row.insertCell(2);
      cell3.innerText = people.email;

      let cell4 = row.insertCell(3);
      cell4.innerText = people.ipAddress;
    }
  }
  //Event handling

  //Initial loading
  peoplesInfoTable();
};
