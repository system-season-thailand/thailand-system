let existingDataStatus="newData",websiteUserUniqueNumber="newUniqueNumber",allGoogleSheetScriptURL="https://script.google.com/macros/s/AKfycbw-wlTzrQqXujyV_VlXezvx5HNkMgK05ZVXfXCV-2wmwl7frFHX4PYxYMg5NGqaC1Aj/exec",form=document.forms["save-package"];function submitFormAndSaveData(){event.preventDefault(),playSoundEffect("success");let e={name:document.getElementById("package_user_code_name_for_later_import_reference_p_id").innerText,content:{},status:existingDataStatus};["downloaded_pdf_clint_data_page","downloaded_pdf_package_including_data_page","downloaded_pdf_flight_data_page","downloaded_pdf_hotel_data_page","downloaded_pdf_clint_movements_data_page","downloaded_pdf_total_price_data_page"].forEach((t=>{let a=document.getElementById(t);a&&"none"!==a.style.display&&a.offsetWidth>0&&a.offsetHeight>0&&(e.content[t]=cleanHTML(a.innerHTML))})),fetch(allGoogleSheetScriptURL,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"},mode:"no-cors"}).then((()=>{updateDataBaseSavedDataNames(),existingDataStatus="existingData",document.getElementById("website_users_name_input_id").disabled=!0,websiteUserUniqueNumber="existingUniqueNumber",document.getElementById("use_website_user_code_name_as_downloaded_pdf_file_name_p_id").style.pointerEvents="auto",document.getElementById("check_pdf_name_button").style.pointerEvents="auto"}))}function cleanHTML(e){return(e=e.replace(/<!--[\s\S]*?-->/g,"")).replace(/\s+/g," ").trim()}let allPackagesGoogleSheetURL="https://script.google.com/macros/s/AKfycbw-wlTzrQqXujyV_VlXezvx5HNkMgK05ZVXfXCV-2wmwl7frFHX4PYxYMg5NGqaC1Aj/exec",sheetData=[],totalRivPackageNumberForUpdatingNewRivPackage=null,googleSheet_ss_PackageNames=[],googleSheet_mm_PackageNames=[],googleSheet_oo_PackageNames=[],googleSheet_tt_PackageNames=[],googleSheet_ww_PackageNames=[],googleSheet_aa_PackageNames=[],googleSheet_rr_PackageNames=[],googleSheet_hh_PackageNames=[],googleSheet_yy_PackageNames=[],googleSheet_bb_PackageNames=[];function updateDataBaseSavedDataNames(){document.getElementById("all_google_sheet_stored_data_names_for_importing_data_div").innerHTML="",clearPackageNameArrays(),fetch(`${allPackagesGoogleSheetURL}?fetchType=1`).then((e=>e.json())).then((e=>{secondTimefetchSheetData(),sheetData.push(...e.values),filterAndStorePackageNames(sheetData,"prepend"),hideAllH3Elements(),enablePointerEventsForFilters(),updateSearchFilterFunctionality()})).catch((e=>console.error(e)))}function secondTimefetchSheetData(){fetch(`${allPackagesGoogleSheetURL}?fetchType=2`).then((e=>e.json())).then((e=>{thirdTimefetchSheetData(),sheetData.push(...e.values),filterAndStorePackageNames(sheetData,"append"),hideAllH3Elements(),enablePointerEventsForFilters(),updateSearchFilterFunctionality()})).catch((e=>console.error(e)))}function thirdTimefetchSheetData(){fetch(`${allPackagesGoogleSheetURL}?fetchType=3`).then((e=>e.json())).then((e=>{fourthTimefetchSheetData(),sheetData.push(...e.values),filterAndStorePackageNames(sheetData,"append"),hideAllH3Elements(),enablePointerEventsForFilters(),updateSearchFilterFunctionality()})).catch((e=>console.error(e)))}function fourthTimefetchSheetData(){fetch(`${allPackagesGoogleSheetURL}?fetchType=4`).then((e=>e.json())).then((e=>{fifthTimefetchSheetData(),sheetData.push(...e.values),filterAndStorePackageNames(sheetData,"append"),hideAllH3Elements(),enablePointerEventsForFilters(),updateSearchFilterFunctionality()})).catch((e=>console.error(e)))}function fifthTimefetchSheetData(){fetch(`${allPackagesGoogleSheetURL}?fetchType=5`).then((e=>e.json())).then((e=>{sheetData.push(...e.values),filterAndStorePackageNames(sheetData,"append"),hideAllH3Elements(),enablePointerEventsForFilters(),updateSearchFilterFunctionality(),document.getElementById("import_packages_title_h6_id").innerText="تم تحميل جميع البكجات"})).catch((e=>console.error(e)))}function clearPackageNameArrays(){[googleSheet_ss_PackageNames,googleSheet_mm_PackageNames,googleSheet_oo_PackageNames,googleSheet_tt_PackageNames,googleSheet_aa_PackageNames,googleSheet_rr_PackageNames,googleSheet_hh_PackageNames,googleSheet_ww_PackageNames,googleSheet_yy_PackageNames,googleSheet_bb_PackageNames].forEach((e=>e.length=0))}function filterAndStorePackageNames(e,t){let a=document.getElementById("all_google_sheet_stored_data_names_for_importing_data_div");e.forEach((e=>{let o=e[0];if(!document.getElementById(o)){let e=createH3Element(o);e.id=o,o.startsWith("ss")?googleSheet_ss_PackageNames.push(e):o.startsWith("mm")?googleSheet_mm_PackageNames.push(e):o.startsWith("oo")?googleSheet_oo_PackageNames.push(e):o.startsWith("tt")?googleSheet_tt_PackageNames.push(e):o.startsWith("aa")?googleSheet_aa_PackageNames.push(e):o.startsWith("rr")?googleSheet_rr_PackageNames.push(e):o.startsWith("hh")?googleSheet_hh_PackageNames.push(e):o.startsWith("ww")?googleSheet_ww_PackageNames.push(e):o.startsWith("yy")?googleSheet_yy_PackageNames.push(e):o.startsWith("bb")&&googleSheet_bb_PackageNames.push(e),"prepend"===t?a.prepend(e):a.append(e)}}))}function hideAllH3Elements(){let e=document.getElementById("all_google_sheet_stored_data_names_for_importing_data_div").getElementsByTagName("h3");for(let t=0;t<e.length;t++)e[t].style.display="none"}let mostTopEmptyCellRowNumberValue,packageArrayMap={"بكج مستر سامي":googleSheet_ss_PackageNames,"بكج عبد الله":googleSheet_tt_PackageNames,"بكج معتز":googleSheet_mm_PackageNames,"بكج وائل":googleSheet_ww_PackageNames,"بكج عبد الرحمن":googleSheet_oo_PackageNames,"بكج علي":googleSheet_aa_PackageNames,"بكج ناصر":googleSheet_rr_PackageNames,"بكج محمد":googleSheet_hh_PackageNames,"بكج مستر ابو سما":googleSheet_yy_PackageNames,"بكج بندر للتجربة":googleSheet_bb_PackageNames};function createH3Element(e){let t=document.createElement("h3");return t.innerText=e,"Name"===t.innerText?t.remove():(t.onclick=function(){pickThisGoogleSheetDataName(this)},t.innerText.startsWith("ss")?googleSheet_ss_PackageNames.push(t):t.innerText.startsWith("mm")?googleSheet_mm_PackageNames.push(t):t.innerText.startsWith("oo")?googleSheet_oo_PackageNames.push(t):t.innerText.startsWith("tt")?googleSheet_tt_PackageNames.push(t):t.innerText.startsWith("aa")?googleSheet_aa_PackageNames.push(t):t.innerText.startsWith("rr")?googleSheet_rr_PackageNames.push(t):t.innerText.startsWith("hh")?googleSheet_hh_PackageNames.push(t):t.innerText.startsWith("ww")?googleSheet_ww_PackageNames.push(t):t.innerText.startsWith("yy")?googleSheet_yy_PackageNames.push(t):t.innerText.startsWith("bb")&&googleSheet_bb_PackageNames.push(t)),t}function enablePointerEventsForFilters(){let e=document.getElementById("website_users_name_input_id").value,t=document.getElementsByClassName("filter_google_sheet_packages_names_p_class");for(let e=0;e<t.length;e++)t[e].style.pointerEvents="auto",t[e].style.opacity="1",t[e].style.backgroundColor="rgb(255, 174, 0)";let a=document.getElementsByClassName("filter_google_sheet_packages_names_p_class");switch(e){case"بكج مستر سامي":a[0]&&(a[0].style.backgroundColor="rgb(140, 0, 255)"),targetArray=googleSheet_ss_PackageNames;break;case"بكج عبد الله":a[1]&&(a[1].style.backgroundColor="rgb(140, 0, 255)"),targetArray=googleSheet_tt_PackageNames;break;case"بكج معتز":a[2]&&(a[2].style.backgroundColor="rgb(140, 0, 255)"),targetArray=googleSheet_mm_PackageNames;break;case"بكج وائل":a[3]&&(a[3].style.backgroundColor="rgb(140, 0, 255)"),targetArray=googleSheet_ww_PackageNames;break;case"بكج عبد الرحمن":a[4]&&(a[4].style.backgroundColor="rgb(140, 0, 255)"),targetArray=googleSheet_oo_PackageNames;break;case"بكج علي":a[5]&&(a[5].style.backgroundColor="rgb(140, 0, 255)"),targetArray=googleSheet_aa_PackageNames;break;case"بكج ناصر":a[6]&&(a[6].style.backgroundColor="rgb(140, 0, 255)"),targetArray=googleSheet_rr_PackageNames;break;case"بكج محمد":a[7]&&(a[7].style.backgroundColor="rgb(140, 0, 255)"),targetArray=googleSheet_rr_PackageNames;break;case"بكج مستر ابو سما":a[8]&&(a[8].style.backgroundColor="rgb(140, 0, 255)"),targetArray=googleSheet_yy_PackageNames;break;case"بكج بندر للتجربة":a[9]&&(a[9].style.backgroundColor="rgb(140, 0, 255)"),targetArray=googleSheet_bb_PackageNames;break;default:targetArray=[]}for(let e=0;e<targetArray.length;e++)targetArray[e].style.display="block"}function updateSearchFilterFunctionality(){""!==document.getElementById("import_google_sheet_data_names_search_bar_input_id").value&&document.querySelectorAll(".search_bar_input_class").forEach((e=>{let t=e.closest(".searchable_names_dropdown_class");t.style.transition="height 0.1s ease-in-out",t.style.maxHeight="70vh",t.style.minHeight="70vh";let a=e.value.trim().toLowerCase(),o=a.split(/\s+/),n=t.querySelectorAll("h3"),_=0;n.forEach((e=>{let t=e.textContent.trim().toLowerCase(),n=o.every((e=>t.includes(e)));""===a&&_<6?(e.style.display="block",_++):e.style.display=n?"block":"none"}))}))}function findSelectedNameAndImportContent(){let e=null;document.querySelectorAll("#all_google_sheet_stored_data_names_for_importing_data_div h3").forEach((function(t){"rgb(0, 155, 0)"===t.style.backgroundColor&&(e=t.innerText)})),e&&(playSoundEffect("success"),importContentForSelectedName(e))}function importContentForSelectedName(e){let t=sheetData.find((t=>t[0]===e));if(document.getElementById("downloaded_pdf_clint_data_page").style.display="none",document.getElementById("downloaded_pdf_package_including_data_page").style.display="none",document.getElementById("downloaded_pdf_flight_data_page").style.display="none",document.getElementById("downloaded_pdf_hotel_data_page").style.display="none",document.getElementById("downloaded_pdf_clint_movements_data_page").style.display="none",document.getElementById("downloaded_pdf_total_price_data_page").style.display="none",t){let e={downloaded_pdf_clint_data_page:t[1],downloaded_pdf_package_including_data_page:t[2],downloaded_pdf_flight_data_page:t[3],downloaded_pdf_hotel_data_page:t[4],downloaded_pdf_clint_movements_data_page:t[5],downloaded_pdf_total_price_data_page:t[6]};try{let t=new DOMParser;for(let a in e){let o=e[a];if(o){let e=formatHtmlForWebsite(o),n=t.parseFromString(e,"text/html").body.innerHTML,_=document.getElementById(a);_&&(_.style.display="block",_.innerHTML="",_.innerHTML=n,reActiveDragAndDropFunctionality(_.id))}}document.getElementById("website_users_name_input_id").disabled=!0,document.querySelectorAll(".inserted_package_data_section_page_image_class").forEach((e=>{e.style.display="none"})),document.querySelectorAll(".inserted_package_data_section_page_image_class_2").forEach((e=>{e.style.display="none"})),document.getElementById("inserted_company_name_image_position_div").style.display="flex"}catch(e){}}hideOverlay();let a=document.getElementById("package_user_code_name_for_later_import_reference_p_id").innerText.split("_riv_")[0];totalRivPackageNumberForUpdatingNewRivPackage=sheetData.filter((e=>e[0].split("_riv_")[0]===a)).length,document.getElementById("package_user_code_name_for_later_import_reference_p_id").innerText=`${document.getElementById("store_google_sheet_package_raw_user_with_no_riv_for_later_reference_when_importing").innerText}_riv_${totalRivPackageNumberForUpdatingNewRivPackage}`,existingDataStatus="newData",websiteUserUniqueNumber="existingUniqueNumber",updateAllowedDates()}function formatHtmlForWebsite(e){return e.replace(/\s+/g," ").trim()}function pickThisGoogleSheetDataName(e){if("rgb(0, 155, 0)"===e.style.backgroundColor)findSelectedNameAndImportContent();else{document.querySelectorAll("#all_google_sheet_stored_data_names_for_importing_data_div h3").forEach((function(e){e.style.backgroundColor="white",e.style.color="black"})),e.style.backgroundColor="rgb(0, 155, 0)",e.style.color="white"}}async function submitForm(){let e=document.getElementById("save-package-unique-code"),t=document.getElementById("website_users_name_input_id").value;if(t){let a={name:t,action:"insert"};try{await fetch(e.action,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a),mode:"no-cors"})}catch(e){}}}async function fetchData(){try{let e=await fetch("https://script.google.com/macros/s/AKfycbwn2yWxh3PJ-oDf7xQEwpThS7ekM9bnvhk1bR3ViHlUBy-bkX8y81llPbf7YMVpb501/exec");processSheetData(await e.json())}catch(e){}}function processSheetData(e){let t=document.getElementById("website_users_name_input_id").value;if(!t)return;let a=getColumnIndex(t);if(-1===a)return void alert("Invalid package name.");let o=e.values,n=-1;for(let e=1;e<o.length;e++)if(""===o[e][a]){n=e;break}-1===n&&(n=o.length),mostTopEmptyCellRowNumberValue=n;let _=document.getElementById("clint_inputs_submit_icon");_.style.opacity="1",_.style.pointerEvents="auto",_.disabled=!1}function getColumnIndex(e){switch(e){case"بكج مستر سامي":return 0;case"بكج عبد الله":return 1;case"بكج معتز":return 2;case"بكج وائل":return 3;case"بكج عبد الرحمن":return 4;case"بكج علي":return 5;case"بكج مستر ابو سما":return 6;case"بكج بندر للتجربة":return 7;case"بكج ناصر":return 8;case"بكج محمد":return 9;default:return-1}}resetPackageNamesFilterInputValue=function(){let e;switch(document.getElementById("import_google_sheet_data_names_search_bar_input_id").value="",document.getElementById("website_users_name_input_id").value){case"بكج مستر سامي":e=googleSheet_ss_PackageNames;break;case"بكج معتز":e=googleSheet_mm_PackageNames;break;case"بكج عبد الرحمن":e=googleSheet_oo_PackageNames;break;case"بكج عبد الله":e=googleSheet_tt_PackageNames;break;case"بكج علي":e=googleSheet_aa_PackageNames;break;case"بكج ناصر":e=googleSheet_rr_PackageNames;break;case"بكج محمد":e=googleSheet_hh_PackageNames;break;case"بكج وائل":e=googleSheet_ww_PackageNames;break;case"بكج مستر سامي":e=googleSheet_yy_PackageNames;break;case"بكج بندر للتجربة":e=googleSheet_bb_PackageNames;break;default:e=[]}for(let t=0;t<e.length;t++)e[t].style.display="block"},fliterGoogleSheetPackagesNames=function(e,t){let a=document.getElementsByClassName("filter_google_sheet_packages_names_p_class");for(let e=0;e<a.length;e++)a[e].style.backgroundColor="rgb(255, 174, 0)";e.style.backgroundColor="rgb(140, 0, 255)";let o,n=document.getElementById("all_google_sheet_stored_data_names_for_importing_data_div").getElementsByTagName("h3");for(let e=0;e<n.length;e++)n[e].style.display="none";switch(t){case"googleSheet_ss_PackageNames":o=googleSheet_ss_PackageNames;break;case"googleSheet_mm_PackageNames":o=googleSheet_mm_PackageNames;break;case"googleSheet_oo_PackageNames":o=googleSheet_oo_PackageNames;break;case"googleSheet_tt_PackageNames":o=googleSheet_tt_PackageNames;break;case"googleSheet_aa_PackageNames":o=googleSheet_aa_PackageNames;break;case"googleSheet_rr_PackageNames":o=googleSheet_rr_PackageNames;break;case"googleSheet_hh_PackageNames":o=googleSheet_hh_PackageNames;break;case"googleSheet_ww_PackageNames":o=googleSheet_ww_PackageNames;break;case"googleSheet_yy_PackageNames":o=googleSheet_yy_PackageNames;break;case"googleSheet_bb_PackageNames":o=googleSheet_bb_PackageNames;break;default:o=[]}for(let e=0;e<o.length;e++)o[e].style.display="block";updateSearchFilterFunctionality()},showWebsiteUsernamePackageNames=function(){let e=document.getElementById("all_google_sheet_stored_data_names_for_importing_data_div"),t=document.getElementById("website_users_name_input_id").value,a=document.getElementsByClassName("filter_google_sheet_packages_names_p_class");for(let e=0;e<a.length;e++)a[e].style.backgroundColor="";let o=[];switch(t){case"بكج مستر سامي":a[0]&&(a[0].style.backgroundColor="rgb(140, 0, 255)"),o=googleSheet_ss_PackageNames;break;case"بكج عبد الله":a[1]&&(a[1].style.backgroundColor="rgb(140, 0, 255)"),o=googleSheet_tt_PackageNames;break;case"بكج معتز":a[2]&&(a[2].style.backgroundColor="rgb(140, 0, 255)"),o=googleSheet_mm_PackageNames;break;case"بكج وائل":a[3]&&(a[3].style.backgroundColor="rgb(140, 0, 255)"),o=googleSheet_ww_PackageNames;break;case"بكج عبد الرحمن":a[4]&&(a[4].style.backgroundColor="rgb(140, 0, 255)"),o=googleSheet_oo_PackageNames;break;case"بكج علي":a[5]&&(a[5].style.backgroundColor="rgb(140, 0, 255)"),o=googleSheet_aa_PackageNames;break;case"بكج ناصر":a[6]&&(a[6].style.backgroundColor="rgb(140, 0, 255)"),o=googleSheet_rr_PackageNames;break;case"بكج محمد":a[7]&&(a[7].style.backgroundColor="rgb(140, 0, 255)"),o=googleSheet_rr_PackageNames;break;case"بكج مستر ابو سما":a[8]&&(a[8].style.backgroundColor="rgb(140, 0, 255)"),o=googleSheet_yy_PackageNames;break;case"بكج بندر للتجربة":a[9]&&(a[9].style.backgroundColor="rgb(140, 0, 255)"),o=googleSheet_bb_PackageNames;break;default:o=[]}let n=e.getElementsByTagName("h3");for(let e=0;e<n.length;e++)n[e].style.display="none";for(let e=0;e<o.length;e++)o[e].style.display="block"},reActiveDragAndDropFunctionality=function(e){if("downloaded_pdf_clint_data_page"===e)document.getElementById("package_clint_name_input_id").value=document.getElementById("store_google_sheet_clint_name_value").innerText,document.getElementById("package_clint_code_number_input_id").value="",document.getElementById("package_clint_code_number_input_id").value=document.getElementById("store_google_sheet_package_clint_code_number_value").innerText,document.getElementById("adult_package_person_amount_input_id").value=document.getElementById("store_google_sheet_package_adult_amount_value").innerText,document.getElementById("kids_package_person_amount_input_id").value=document.getElementById("store_google_sheet_package_kids_amount_value").innerText,document.getElementById("infant_package_person_amount_input_id").value=document.getElementById("store_google_sheet_package_infant_amount_value").innerText,document.getElementById("whole_package_start_date_input_id").value=document.getElementById("store_google_sheet_whole_package_first_date_value").innerText,document.getElementById("whole_package_end_date_input_id").value=document.getElementById("store_google_sheet_whole_package_last_date_value").innerText,document.getElementById("package_total_nights_input_id").value=`${document.getElementById("store_google_sheet_whole_package_total_nights_value").innerText} ليالي`,storePackageTotalNights=document.getElementById("store_google_sheet_whole_package_total_nights_value").innerText,document.getElementById("clint_company_name_input_id").value=document.getElementById("store_google_sheet_clint_company_name_value").innerText,document.getElementById("store_google_sheet_package_user_name_value")?document.getElementById("website_users_name_input_id").value=document.getElementById("store_google_sheet_package_user_name_value").innerText:document.getElementById("website_users_name_input_id").value="عبد الرحمن","بكج إقتصادي"===document.getElementById("store_google_sheet_clint_package_price_type_checkbox_value").innerText?(document.getElementById("economy_package_checkbox").checked=!0,document.getElementById("medium_package_checkbox").checked=!1,document.getElementById("vip_package_checkbox").checked=!1):"بكج متوسط"===document.getElementById("store_google_sheet_clint_package_price_type_checkbox_value").innerText?(document.getElementById("economy_package_checkbox").checked=!1,document.getElementById("medium_package_checkbox").checked=!0,document.getElementById("vip_package_checkbox").checked=!1):"بكج VIP"===document.getElementById("store_google_sheet_clint_package_price_type_checkbox_value").innerText&&(document.getElementById("economy_package_checkbox").checked=!1,document.getElementById("medium_package_checkbox").checked=!1,document.getElementById("vip_package_checkbox").checked=!0),document.getElementById("package_price_type_h6_id").style.display="block","بكج شهل عسل"===document.getElementById("store_google_sheet_clint_package_type_checkbox_value").innerText?(document.getElementById("honeymoon_checkbox").checked=!0,document.getElementById("guys_checkbox").checked=!1,document.getElementById("family_checkbox").checked=!1,document.getElementById("two_people_checkbox").checked=!1,document.getElementById("group_of_people_checkbox").checked=!1):"بكج شباب"===document.getElementById("store_google_sheet_clint_package_type_checkbox_value").innerText?(document.getElementById("honeymoon_checkbox").checked=!1,document.getElementById("guys_checkbox").checked=!0,document.getElementById("family_checkbox").checked=!1,document.getElementById("two_people_checkbox").checked=!1,document.getElementById("group_of_people_checkbox").checked=!1):"بكج عائلة"===document.getElementById("store_google_sheet_clint_package_type_checkbox_value").innerText?(document.getElementById("honeymoon_checkbox").checked=!1,document.getElementById("guys_checkbox").checked=!1,document.getElementById("family_checkbox").checked=!0,document.getElementById("two_people_checkbox").checked=!1,document.getElementById("group_of_people_checkbox").checked=!1):"بكج شخصين"===document.getElementById("store_google_sheet_clint_package_type_checkbox_value").innerText?(document.getElementById("honeymoon_checkbox").checked=!1,document.getElementById("guys_checkbox").checked=!1,document.getElementById("family_checkbox").checked=!1,document.getElementById("two_people_checkbox").checked=!0,document.getElementById("group_of_people_checkbox").checked=!1):"بكج قروب"===document.getElementById("store_google_sheet_clint_package_type_checkbox_value").innerText?(document.getElementById("honeymoon_checkbox").checked=!1,document.getElementById("guys_checkbox").checked=!1,document.getElementById("family_checkbox").checked=!1,document.getElementById("two_people_checkbox").checked=!1,document.getElementById("group_of_people_checkbox").checked=!0):(document.getElementById("honeymoon_checkbox").checked=!1,document.getElementById("guys_checkbox").checked=!1,document.getElementById("family_checkbox").checked=!1,document.getElementById("two_people_checkbox").checked=!1,document.getElementById("group_of_people_checkbox").checked=!1),document.getElementById("inserted_company_name_logo_id")&&(document.getElementById("inserted_company_name_logo_id").onclick=function(e){e.preventDefault(),e.stopPropagation();let t=document.createElement("div");t.className="black_overlay",t.id="black_overlay_id",document.body.appendChild(t),setTimeout((()=>{t.style.opacity="1"}),100);let a=document.getElementById("ensure_delete_company_logo_div");setTimeout((()=>{a.style.transform="translate(-50%, -50%)"}),50),t.onclick=()=>{a.style.transform="translate(-50%, -100vh)",t.style.opacity="0",setTimeout((()=>{document.body.removeChild(t)}),300)}}),"hide all package dates"===document.getElementById("store_google_sheet_all_package_dates_hidden_or_no").innerText?(document.getElementById("hide_all_package_dates_icon").style.backgroundColor="rgb(0, 255, 0)",document.getElementById("hide_all_package_dates_icon").style.color="black"):(document.getElementById("hide_all_package_dates_icon").style.backgroundColor="rgb(0, 87, 116)",document.getElementById("hide_all_package_dates_icon").style.color="white");else if("downloaded_pdf_flight_data_page"===e){document.querySelectorAll(".flight_row_class").forEach((e=>{e.querySelectorAll(".flight_row_flight_arrival_time_controller").forEach((function(e){e.onclick=function(t){flightRowAirLineControllerFunction(t,e)}}))})),document.getElementById("manually_add_flight_row_icon").style.display="none",insertedFlightDataDivUniqueId=document.getElementById("store_google_sheet_flight_uniuqe_id_name_value").innerText}else if("downloaded_pdf_hotel_data_page"===e){let a=document.querySelectorAll(".hotel_row_class");document.getElementById("hotel_check_in_input_id").value=document.getElementById("store_google_sheet_hotel_last_stopped_check_out_date_value").innerText,document.getElementById("hotel_check_in_input_id").disabled=!0,a.forEach((e=>{e.querySelectorAll(".hotel_row_image_controller").forEach((e=>{handleClickEvent(e)}))})),createHotelDragAndDropMood(),saveOriginalHotelDates()}else if("downloaded_pdf_clint_movements_data_page"===e){let o=document.querySelectorAll(".clint_movements_row_class_for_editing");filterUsedClintVisitingPlacesNames(),o.forEach((e=>{e.querySelectorAll(".clint_movements_row_controller").forEach((function(e){e.onclick=function(t){clintMovementsRowCityNameControllerFunction(t,e)}}))})),document.querySelectorAll(".clint_movements_row_class_for_editing").forEach((e=>{e.querySelectorAll("div").forEach((e=>{e.style.backgroundColor="white",e.style.color="black"}))})),highlightWeekendClintMovements()}else if("downloaded_pdf_package_including_data_page"===e){function t(e,t){let a=document.getElementById(e);if(a){let e=a.getElementsByTagName("p");Array.from(e).forEach((e=>{let a=e.innerText,o=document.getElementById(a);if(o){o.nextElementSibling.style.setProperty("--checkbox-color",t)}}))}}document.getElementById("sms_card_with_internet_amount_input_id").value=document.getElementById("store_google_sheet_package_including_sms_value").innerText,document.getElementById("inner_flight_tickets_amount_input_id").value=document.getElementById("store_google_sheet_package_including_inner_tickets_value").innerText,document.getElementById("package_details_textarea_id").value=document.getElementById("store_google_sheet_package_details_textarea_value").innerText.replace(/\\n/g,"\n"),document.getElementById("package_totla_price_input_id").value=document.getElementById("store_google_sheet_package_total_price_value").innerText,"showPrice"==document.getElementById("store_google_sheet_show_price_in_pdf_checked_or_no").innerHTML?document.getElementById("show_package_total_price_checkbox").checked=!0:"hidePrice"==document.getElementById("store_google_sheet_show_price_in_pdf_checked_or_no").innerHTML&&(document.getElementById("show_package_total_price_checkbox").checked=!1),document.getElementById("specific_car_type_input_id").value=document.getElementById("store_google_sheet_package_specific_car_type_value").innerText,["privet_car_with_driver_to_welcome_and_etc_checkbox","extra_car_for_carring_bags_checkbox","hotel_booking_with_breakfast_for_2_people_checkbox","welcome_goodbye_hotel_delivery_checkbox","customer_service_24_hour_checkbox","sms_card_with_internet_checkbox","inner_flight_tickets_checkbox","outer_flight_tickets_checkbox","placese_visiting_cost_checkbox"].forEach((e=>{let t=document.getElementById(e);if(t){t.checked=!1,t.nextElementSibling.style.setProperty("--checkbox-color","rgb(255, 255, 255)")}})),t("store_google_sheet_green_checked_package_including_and_not_including_input_div","rgb(0, 255, 0)"),t("store_google_sheet_red_checked_package_including_and_not_including_input_div","rgb(255, 0, 0)"),t("store_google_sheet_white_package_including_and_not_including_input_div","rgb(255, 255, 255)")}};
