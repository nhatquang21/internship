//Get món ăn bán chạy nhất



 SELECT D.dish_id, D.dish_name, D.dish_price, sum(M.dish_quantity) as total_dishquantity
    FROM Dishes D INNER JOIN order_dishes M 
    ON D.dish_id = M.dish_id
    INNER JOIN Orders O ON M.order_id = O.order_id
    GROUP BY D.dish_id
    ORDER BY total_dishquantity desc
    limit 1;


//Mon an ban chay 2nd

SELECT D.dish_id, D.dish_name, D.dish_price, sum(M.dish_quantity) as total_dishquantity
    FROM Dishes D INNER JOIN order_dishes M 
    ON D.dish_id = M.dish_id
    INNER JOIN Orders O ON M.order_id = O.order_id
    GROUP BY D.dish_id
    ORDER BY total_dishquantity desc
    offset 1 limit 1;

//Món ăn bán chạy 3rd
SELECT D.dish_id, D.dish_name, D.dish_price, sum(M.dish_quantity) as total_dishquantity
    FROM Dishes D INNER JOIN order_dishes M 
    ON D.dish_id = M.dish_id
    INNER JOIN Orders O ON M.order_id = O.order_id
    GROUP BY D.dish_id
    ORDER BY total_dishquantity desc
    offset 2 limit 1;

//Thống kê số lượng đơn hàng trong ngày hôm nay

SELECT O.order_id, sum(M.dish_quantity) as total_dishquantity
    from Orders O inner join order_dishes M 
    ON O.order_id = M.order_id
    where O.created_on = CURRENT_DATE
    GROUP BY O.order_id;

//Tổng doanh thu của 1 ngày

WITH mydate (var1) as (
   values (CURRENT_DATE)
)

SELECT sum(total_bill), CURRENT_DATE
FROM Orders, mydate
where orders.created_on = var1
group by created_on;


//Đơn hàng có giá trị cao nhất trong 1 ngày



SELECT O.order_id, O.total_bill, sum(dish_quantity)
FROM Orders O join order_dishes M ON O.order_id = M.order_id
where O.created_on = CURRENT_DATE
group by O.order_id
order by  O.total_bill desc
limit 1;



// Lọc doanh thu trong khoảng ...

SELECT to_char(orders.created_on, 'DD/MM/YYYY'), sum(orders.total_bill) as profit
from orders
where orders.created_on >= '2023-02-16' and orders.created_on <= '2023-02-18'
group by orders.created_on;

// Nhân viên bán nhiều nhất trong 1 ngày


SELECT E.employee_name, count(O.employee_id) as serving_time
from Employees E INNER JOIN orders O
ON E.employee_id = O.employee_id
where O.created_on = '2023-02-16'
GROUP BY E.employee_name
ORDER BY serving_time desc 
limit 1;


insert into order_dishes(dish_id, order_id, dish_quantity, dish_totalprice)
values (3,3, 10, 2500000),
(3,2,10, 1000000),
(3,4, 2, 398000),
(3,5,2, 100000);


//Top 3 món ăn bán chạy

 SELECT D.dish_id, D.dish_name, D.dish_price, sum(M.dish_quantity) as total_dishquantity
    FROM Dishes D INNER JOIN order_dishes M 
    ON D.dish_id = M.dish_id
    INNER JOIN Orders O ON M.order_id = O.order_id
    where O.created_on = '2023-02-18'
    GROUP BY D.dish_id
    ORDER BY total_dishquantity desc
    limit 3;
