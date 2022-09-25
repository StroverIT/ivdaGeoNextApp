Нямаме error handling

---- До адрес ----

---- /До адрес ----
-----До офис на еконт ---

Човека идва до магазина и взима поръчката - Доставя до офис на еконт, който е поръчал клиента -

---- /До офис на еконт
Как да разбере коя поръчка за кой офис на еконт е и как да разбере за кого е
Как се взима поръчка от Еконт - С номер на телефона или егн и после я потвърждаваш чрез лична карта или с Име

Трябва да се пита Гери отколко доколко да идва куриера да взима поръчките

Примерно:

Идва в 7:00 - Гледа коя пратка да вземе - Взима пратката - Доставя до адреса

Въпроси за разрешаване:

Къде ще се гледа пратката

В случай че искате да заявите и куриер, който да дойде да вземе пратката, трябва да подадете параметрите requestCourierTimeFrom (от колко) и requestCourierTimeTo – до колко часа да дойде куриерът, за да вземе пратката от зададения адрес за взимане на пратката
calculate – за изчисляване на цена
validate – за валидиране на информация за товарителница
create – за създаване на товарителница
createLabel

--senderClient
--senderAddress
--receiverClient
--requestCourierTimeFrom и requestCourierTimeTo
--packCount
--shipmentType
--weight
--shipmentDescription
--mode
--ReturnInstructionParams

id Идентификатор
name Име на компания
nameEn Име на компания на латиница
phones Телефон за контакт
e-mail Имейл
clientNumber Клиентски номер в системата на Еконт
clientNumberEn Клиентски номер в системата на Еконт на латиница
juridicalEntity Обозначава дали клиента е физическо (0) или юридическо (1) лице
personalIDType Тип уникален идентификационен номер на подателя (EGN, PIN, PK, PASSPORT)
personalIDNumber ЕГН (само за физическо лице)
companyType Тип на компанията (ООД, ЕООД и др.)
ein ЕИК (уникален идентификационен номер на компанията)
ddsEinPrefix ДДС префикс (BG за България)
ddsEin ДДС номер
registrationAddress Адрес по регистрация на компанията
molName Име на упълномощено от компанията лице
molEGN ЕГН на упълномощено от компанията лице
molIDNum Номер на документ за самоличност на упълномощеното от компанията лице

pack Куриерска пратка (до 50 кг.)
pallet Пале (80x120x180 см и до 1000 кг)
cargo Карго пратка (палетизирана пратка над 80x120x180 см. и до 200x200x180 с тегло до 500 кг)

senderOfficeCode

"senderClient":{
"name":"Иван Иванов",
"phones":["0888888888"]
},
"senderAddress":{
"city":{
"country":{
"code3":"BGR"
},
"name":"Русе",
"postCode":"7012"
},
"street":"Алея Младост",
"num":"7"
},

---

{
"label":{
"senderClient":{
"name":"Иван Иванов",
"phones":["0888888888"]
},
"senderAddress":{
"city":{
"country":{
"code3":"BGR"
},
"name":"Русе",
"postCode":"7012"
},
"street":"Алея Младост",
"num":"7"
},
"receiverClient":{
"name":"Димитър Димитров",
"phones":["0876543210"]
},
"receiverAddress":{
"city":{
"country":{
"code3":"BGR"
},
"name":"Русе",
"postCode":"7010"
},
"street":"Муткурова",
"num":"84",
"other":"бл. 5, вх. А, ет. 6"
},
"packCount":1,
"shipmentType":"PACK",
"weight":5,
"shipmentDescription":"обувки"
},
"mode":"create"
}

support_integrations@econt.com
