import qr from "qrcode";

export default async function createDeliveryMessage(
  text,
  cart,
  qrCodeObj,
  isAdmin
) {
  let qrCodeData = JSON.stringify(qrCodeObj);

  let img = await qr.toDataURL(qrCodeData);

  return `
  <h2 style="margin-bottom:40px">${text}</h2>
  <h3 style="text-align:center;color:hsl(215, 80%, 60%)">Вашите продукти </h3>
    ${cart
      .map((cartItem) => {
        const item = cartItem.item;
        return `<div style="margin-bottom: 10px">
          Продукта: ${item.name} <br/>
          Бройки: ${cartItem.qty} <br/>
          Обща цена: ${parseFloat(item.price * cartItem.qty).toFixed(2)} <br/>
        </div>`;
      })
      .join("")}

     <div style="margin-top:20px">
     ${!isAdmin ? "Като отидете в магазина покажете QR кода" : ""} </br>
     <img src="${img}"/>
     </div>
  `;
}
