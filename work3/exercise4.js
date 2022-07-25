// Реализовать систему продажи билетов, которая позволит продавать билеты и возвращать их   
// ticketWindow.createEvent('Concert', 500) // создаем концерт и указываем цену билетов
// ticketWindow.buyTicket('Concert') /* Добавляем сумму за билет в кассу, возвращаем
// случайный шестизначный ID билета, создать ID можно любым способом */

// ticketWindow.returnTicket('123456') /* Возвращаем билет, если в системе такой id записан
// как проданный, он должен быть удален из списка проданных и из кассы должна быть
// вычтена соответствующая его цене сумма */

const TicketWindow = function () {
  const events = new Map(); // [event, price]
  const tickets = new Map(); // [ticketID, event]
  let cashbox = 0;

  this.createEvent = function (event, price) {
    events.set(event, price);
  }

  this.buyTicket = function (event) {
    if (events.has(event)) {
      const newTicketId = Math.floor(100000 + Math.random() * 900000);
      tickets.set(newTicketId, event);
      const price = events.get(event);
      cashbox += price;
      return newTicketId;
    }
    return 'No such event';
  }

  this.returnTicket = function (returnedTicket) {
    const ticket = Number(returnedTicket);
    if (tickets.has(ticket)) {
      const event = tickets.get(ticket);
      const price = events.get(event);
      cashbox -= price;
      tickets.delete(ticket);
      return `returned ticket ${ticket}, price: ${price}`;
    }
    return 'No such ticket';
  }
};
