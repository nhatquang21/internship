--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: customers; Type: TABLE; Schema: public; Owner: jason
--

CREATE TABLE public.customers (
    customer_id integer NOT NULL,
    customer_name character varying(50) NOT NULL,
    customer_address character varying(200),
    phone_number character varying(11)
);


ALTER TABLE public.customers OWNER TO jason;

--
-- Name: customers_customer_id_seq; Type: SEQUENCE; Schema: public; Owner: jason
--

CREATE SEQUENCE public.customers_customer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.customers_customer_id_seq OWNER TO jason;

--
-- Name: customers_customer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jason
--

ALTER SEQUENCE public.customers_customer_id_seq OWNED BY public.customers.customer_id;


--
-- Name: dishes; Type: TABLE; Schema: public; Owner: jason
--

CREATE TABLE public.dishes (
    dish_id integer NOT NULL,
    dish_price integer NOT NULL,
    dish_name character varying(50) NOT NULL
);


ALTER TABLE public.dishes OWNER TO jason;

--
-- Name: dishes_dish_id_seq; Type: SEQUENCE; Schema: public; Owner: jason
--

CREATE SEQUENCE public.dishes_dish_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.dishes_dish_id_seq OWNER TO jason;

--
-- Name: dishes_dish_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jason
--

ALTER SEQUENCE public.dishes_dish_id_seq OWNED BY public.dishes.dish_id;


--
-- Name: employees; Type: TABLE; Schema: public; Owner: jason
--

CREATE TABLE public.employees (
    employee_id integer NOT NULL,
    employee_name character varying(50) NOT NULL,
    employee_status boolean NOT NULL,
    user_id integer
);


ALTER TABLE public.employees OWNER TO jason;

--
-- Name: employees_employee_id_seq; Type: SEQUENCE; Schema: public; Owner: jason
--

CREATE SEQUENCE public.employees_employee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employees_employee_id_seq OWNER TO jason;

--
-- Name: employees_employee_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jason
--

ALTER SEQUENCE public.employees_employee_id_seq OWNED BY public.employees.employee_id;


--
-- Name: order_dishes; Type: TABLE; Schema: public; Owner: jason
--

CREATE TABLE public.order_dishes (
    dish_id integer NOT NULL,
    order_id integer NOT NULL,
    dish_quantity integer NOT NULL,
    dish_totalprice integer NOT NULL
);


ALTER TABLE public.order_dishes OWNER TO jason;

--
-- Name: orders; Type: TABLE; Schema: public; Owner: jason
--

CREATE TABLE public.orders (
    order_id integer NOT NULL,
    total_bill integer,
    created_on timestamp with time zone NOT NULL,
    employee_id integer,
    customer_id integer
);


ALTER TABLE public.orders OWNER TO jason;

--
-- Name: orders_order_id_seq; Type: SEQUENCE; Schema: public; Owner: jason
--

CREATE SEQUENCE public.orders_order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_order_id_seq OWNER TO jason;

--
-- Name: orders_order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jason
--

ALTER SEQUENCE public.orders_order_id_seq OWNED BY public.orders.order_id;


--
-- Name: roles; Type: TABLE; Schema: public; Owner: jason
--

CREATE TABLE public.roles (
    role_id integer NOT NULL,
    role_name character varying(50) NOT NULL
);


ALTER TABLE public.roles OWNER TO jason;

--
-- Name: roles_role_id_seq; Type: SEQUENCE; Schema: public; Owner: jason
--

CREATE SEQUENCE public.roles_role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.roles_role_id_seq OWNER TO jason;

--
-- Name: roles_role_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jason
--

ALTER SEQUENCE public.roles_role_id_seq OWNED BY public.roles.role_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: jason
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    user_name character varying(50) NOT NULL,
    password character varying(500) NOT NULL,
    created_on timestamp with time zone NOT NULL,
    updated_on timestamp with time zone,
    role_id integer
);


ALTER TABLE public.users OWNER TO jason;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: jason
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO jason;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jason
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: customers customer_id; Type: DEFAULT; Schema: public; Owner: jason
--

ALTER TABLE ONLY public.customers ALTER COLUMN customer_id SET DEFAULT nextval('public.customers_customer_id_seq'::regclass);


--
-- Name: dishes dish_id; Type: DEFAULT; Schema: public; Owner: jason
--

ALTER TABLE ONLY public.dishes ALTER COLUMN dish_id SET DEFAULT nextval('public.dishes_dish_id_seq'::regclass);


--
-- Name: employees employee_id; Type: DEFAULT; Schema: public; Owner: jason
--

ALTER TABLE ONLY public.employees ALTER COLUMN employee_id SET DEFAULT nextval('public.employees_employee_id_seq'::regclass);


--
-- Name: orders order_id; Type: DEFAULT; Schema: public; Owner: jason
--

ALTER TABLE ONLY public.orders ALTER COLUMN order_id SET DEFAULT nextval('public.orders_order_id_seq'::regclass);


--
-- Name: roles role_id; Type: DEFAULT; Schema: public; Owner: jason
--

ALTER TABLE ONLY public.roles ALTER COLUMN role_id SET DEFAULT nextval('public.roles_role_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: jason
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: jason
--

COPY public.customers (customer_id, customer_name, customer_address, phone_number) FROM stdin;
2	Trần Huỳnh Nhật Quang	Tân Bình	0981833759
3	Bình	Tân Phú	0981833750
4	Minh	quận 1	0981833751
5	A	Quận 2	0981833752
6	B	Quận 3	09021212112
7	C	Quận 5	0902121242
8	D	Quận 7	0902154542
9	E	Quận 8	0902009542
\.


--
-- Data for Name: dishes; Type: TABLE DATA; Schema: public; Owner: jason
--

COPY public.dishes (dish_id, dish_price, dish_name) FROM stdin;
2	100000	com chien
3	250000	Thịt ba chỉ
4	199999	Chả giò
6	50000	Lẩu Tứ Xuyên
1	10000	rau
11	200000	Phỉ thúy
14	40000	Cá viên
5	55000	Lẩu Thái
17	55000	Lẩu nấm
18	55000	Lẩu kim chi
\.


--
-- Data for Name: employees; Type: TABLE DATA; Schema: public; Owner: jason
--

COPY public.employees (employee_id, employee_name, employee_status, user_id) FROM stdin;
1	Nguyễn Văn A	t	\N
2	Lê Thị B	f	\N
13	Tèo Teo	f	\N
6	Quang	t	1
7	Quang 2	t	4
\.


--
-- Data for Name: order_dishes; Type: TABLE DATA; Schema: public; Owner: jason
--

COPY public.order_dishes (dish_id, order_id, dish_quantity, dish_totalprice) FROM stdin;
6	1	1	50000
5	1	1	50000
3	1	1	750000
1	1	3	60000
2	2	5	500000
1	2	5	50000
5	2	1	50000
6	2	1	50000
4	2	3	599997
6	13	1	50000
5	13	2	110000
17	13	1	55000
18	13	1	55000
14	13	20	800000
5	5	2	100000
3	5	10	2500000
2	5	10	1000000
4	5	10	398000
3	4	3	750000
6	24	1	50000
5	24	2	110000
17	24	1	55000
18	24	1	55000
14	24	20	800000
6	25	1	50000
5	25	2	110000
17	25	1	55000
18	25	1	55000
14	25	20	800000
6	11	1	50000
5	11	1	55000
17	11	1	55000
18	11	1	55000
14	11	20	800000
6	33	1	50000
5	33	2	110000
17	33	1	55000
18	33	1	55000
14	33	20	800000
6	34	1	50000
5	34	2	110000
17	34	1	55000
18	34	1	55000
14	34	20	800000
6	35	1	50000
5	35	2	110000
17	35	1	55000
18	35	1	55000
14	35	20	800000
6	36	1	50000
5	36	2	110000
17	36	1	55000
18	36	1	55000
14	36	20	800000
6	37	1	50000
5	37	2	110000
17	37	1	55000
18	37	1	55000
14	37	20	800000
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: jason
--

COPY public.orders (order_id, total_bill, created_on, employee_id, customer_id) FROM stdin;
1	810000	2023-02-15 17:00:00+00	1	2
2	1249997	2023-02-15 17:00:00+00	1	2
4	750000	2023-02-17 17:00:00+00	1	2
5	3999998	2023-02-15 17:00:00+00	1	2
11	1015000	2023-02-21 17:00:00+00	1	2
13	1070000	2023-02-22 17:00:00+00	1	2
24	1070000	2023-02-23 07:19:36.157+00	1	2
25	1070000	2023-02-23 10:06:14.574+00	1	2
32	50000	2023-02-24 00:00:00+00	2	2
33	1070000	2023-02-24 08:34:21.31+00	2	4
34	1070000	2023-02-28 10:00:15.203+00	2	5
35	1070000	2023-02-28 10:02:19.062+00	2	4
36	1070000	2023-02-28 10:02:32.112+00	2	4
37	1070000	2023-02-28 10:08:15.695+00	2	4
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: jason
--

COPY public.roles (role_id, role_name) FROM stdin;
1	admin
2	employee
3	customer
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: jason
--

COPY public.users (user_id, user_name, password, created_on, updated_on, role_id) FROM stdin;
7	admin	$2b$10$thLQ5jDOibLMNdI.OiBw8edZx0/cDpAV9Z7NzhBZjw9KLwbIeXEO2	2023-02-27 02:59:09.648+00	\N	1
9	admin2	$2b$10$l2euAbG4BevLCmNRoqSWg.elRgF8mBrnibGCAVDhZkGQkdz6WxSki	2023-02-27 08:27:13.484+00	\N	1
10	admin3	$2b$10$csu2KIjmANdbWXVXS9XlNOJYExyzeo03yDREVi2IYzbpLG5UDx8zy	2023-02-27 08:32:59.516+00	\N	1
4	nhatquang2	$2b$10$1YyXZRRAbSEhvuSTZ/RiyuIlov3I7tt54LtaW6ML/gmQSs6CzBfFy	2023-02-24 10:40:38.154+00	2023-02-27 02:54:00.302+00	2
11	test1	$2b$10$MVpXaFCafduE6mQiukP1YeYvs3v5JHTS3m./JX9V9rG5.2XoK0MUO	2023-02-28 07:13:35.472+00	\N	\N
12	test2	$2b$10$5xss5k6BNgVI3bguYLUJxuI5vwhzTaNZvks9PtZxpl9Xau4GLD9/6	2023-02-28 07:17:52.531+00	\N	3
1	nhatquang1	$2b$10$iGxkJB9c0T/8vXOGl6pJFuS7SDp0dFTGDfkzdtpSwdHXnfXZjkF0q	2023-02-24 10:38:39.665+00	2023-02-28 08:18:48.802+00	2
\.


--
-- Name: customers_customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jason
--

SELECT pg_catalog.setval('public.customers_customer_id_seq', 16, true);


--
-- Name: dishes_dish_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jason
--

SELECT pg_catalog.setval('public.dishes_dish_id_seq', 23, true);


--
-- Name: employees_employee_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jason
--

SELECT pg_catalog.setval('public.employees_employee_id_seq', 14, true);


--
-- Name: orders_order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jason
--

SELECT pg_catalog.setval('public.orders_order_id_seq', 37, true);


--
-- Name: roles_role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jason
--

SELECT pg_catalog.setval('public.roles_role_id_seq', 13, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jason
--

SELECT pg_catalog.setval('public.users_user_id_seq', 13, true);


--
-- Name: customers customers_pkey; Type: CONSTRAINT; Schema: public; Owner: jason
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (customer_id);


--
-- Name: dishes dishes_pkey; Type: CONSTRAINT; Schema: public; Owner: jason
--

ALTER TABLE ONLY public.dishes
    ADD CONSTRAINT dishes_pkey PRIMARY KEY (dish_id);


--
-- Name: employees employees_pkey; Type: CONSTRAINT; Schema: public; Owner: jason
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_pkey PRIMARY KEY (employee_id);


--
-- Name: order_dishes order_dishes_pkey; Type: CONSTRAINT; Schema: public; Owner: jason
--

ALTER TABLE ONLY public.order_dishes
    ADD CONSTRAINT order_dishes_pkey PRIMARY KEY (dish_id, order_id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: jason
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (order_id);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: jason
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (role_id);


--
-- Name: employees unique_user_id; Type: CONSTRAINT; Schema: public; Owner: jason
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT unique_user_id UNIQUE (user_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: jason
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: users users_user_name_key; Type: CONSTRAINT; Schema: public; Owner: jason
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_user_name_key UNIQUE (user_name);


--
-- Name: idx_customer_phone_number; Type: INDEX; Schema: public; Owner: jason
--

CREATE UNIQUE INDEX idx_customer_phone_number ON public.customers USING btree (phone_number);


--
-- Name: role_rolename; Type: INDEX; Schema: public; Owner: jason
--

CREATE UNIQUE INDEX role_rolename ON public.roles USING btree (role_name);


--
-- Name: orders fk_customers; Type: FK CONSTRAINT; Schema: public; Owner: jason
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT fk_customers FOREIGN KEY (customer_id) REFERENCES public.customers(customer_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: orders fk_employees; Type: FK CONSTRAINT; Schema: public; Owner: jason
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT fk_employees FOREIGN KEY (employee_id) REFERENCES public.employees(employee_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: users fk_role; Type: FK CONSTRAINT; Schema: public; Owner: jason
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES public.roles(role_id);


--
-- Name: employees fk_user; Type: FK CONSTRAINT; Schema: public; Owner: jason
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- Name: order_dishes order_dishes_dish_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jason
--

ALTER TABLE ONLY public.order_dishes
    ADD CONSTRAINT order_dishes_dish_id_fkey FOREIGN KEY (dish_id) REFERENCES public.dishes(dish_id);


--
-- Name: order_dishes order_dishes_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jason
--

ALTER TABLE ONLY public.order_dishes
    ADD CONSTRAINT order_dishes_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(order_id);


--
-- PostgreSQL database dump complete
--

