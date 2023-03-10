PGDMP     :        
            {            HotpotManagement    15.2    15.2 ,    K           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            L           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            M           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            N           1262    16411    HotpotManagement    DATABASE     ?   CREATE DATABASE "HotpotManagement" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = icu LOCALE = 'en_US.UTF-8' ICU_LOCALE = 'en-US';
 "   DROP DATABASE "HotpotManagement";
                jason    false            ?            1259    16494    customerhistory    TABLE     ?   CREATE TABLE public.customerhistory (
    history_id integer NOT NULL,
    date_visited timestamp without time zone NOT NULL,
    customer_id integer NOT NULL
);
 #   DROP TABLE public.customerhistory;
       public         heap    jason    false            ?            1259    16493    customerhistory_history_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.customerhistory_history_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.customerhistory_history_id_seq;
       public          jason    false    224            O           0    0    customerhistory_history_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.customerhistory_history_id_seq OWNED BY public.customerhistory.history_id;
          public          jason    false    223            ?            1259    16465 	   customers    TABLE     ?   CREATE TABLE public.customers (
    customer_id integer NOT NULL,
    customer_name character varying(50) NOT NULL,
    customer_address character varying(200),
    phone_number character varying(12) NOT NULL
);
    DROP TABLE public.customers;
       public         heap    jason    false            ?            1259    16464    customers_customer_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.customers_customer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.customers_customer_id_seq;
       public          jason    false    219            P           0    0    customers_customer_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.customers_customer_id_seq OWNED BY public.customers.customer_id;
          public          jason    false    218            ?            1259    16413    dishes    TABLE     ?   CREATE TABLE public.dishes (
    dish_id integer NOT NULL,
    dish_price integer NOT NULL,
    dish_name character varying(50) NOT NULL
);
    DROP TABLE public.dishes;
       public         heap    jason    false            ?            1259    16412    dishes_dish_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.dishes_dish_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.dishes_dish_id_seq;
       public          jason    false    215            Q           0    0    dishes_dish_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.dishes_dish_id_seq OWNED BY public.dishes.dish_id;
          public          jason    false    214            ?            1259    16472 	   employees    TABLE     ?   CREATE TABLE public.employees (
    employee_id integer NOT NULL,
    employee_name character varying(50) NOT NULL,
    employee_status boolean NOT NULL
);
    DROP TABLE public.employees;
       public         heap    jason    false            ?            1259    16471    employees_employee_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.employees_employee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.employees_employee_id_seq;
       public          jason    false    221            R           0    0    employees_employee_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.employees_employee_id_seq OWNED BY public.employees.employee_id;
          public          jason    false    220            ?            1259    16478    order_dishes    TABLE     ?   CREATE TABLE public.order_dishes (
    dish_id integer NOT NULL,
    order_id integer NOT NULL,
    dish_quantity integer NOT NULL,
    dish_totalprice integer NOT NULL
);
     DROP TABLE public.order_dishes;
       public         heap    jason    false            ?            1259    16434    orders    TABLE     ?   CREATE TABLE public.orders (
    order_id integer NOT NULL,
    total_bill integer,
    created_on timestamp without time zone NOT NULL,
    employee_id integer NOT NULL,
    customer_id integer NOT NULL
);
    DROP TABLE public.orders;
       public         heap    jason    false            ?            1259    16433    orders_order_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.orders_order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.orders_order_id_seq;
       public          jason    false    217            S           0    0    orders_order_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.orders_order_id_seq OWNED BY public.orders.order_id;
          public          jason    false    216            ?           2604    16497    customerhistory history_id    DEFAULT     ?   ALTER TABLE ONLY public.customerhistory ALTER COLUMN history_id SET DEFAULT nextval('public.customerhistory_history_id_seq'::regclass);
 I   ALTER TABLE public.customerhistory ALTER COLUMN history_id DROP DEFAULT;
       public          jason    false    223    224    224            ?           2604    16468    customers customer_id    DEFAULT     ~   ALTER TABLE ONLY public.customers ALTER COLUMN customer_id SET DEFAULT nextval('public.customers_customer_id_seq'::regclass);
 D   ALTER TABLE public.customers ALTER COLUMN customer_id DROP DEFAULT;
       public          jason    false    218    219    219            ?           2604    16416    dishes dish_id    DEFAULT     p   ALTER TABLE ONLY public.dishes ALTER COLUMN dish_id SET DEFAULT nextval('public.dishes_dish_id_seq'::regclass);
 =   ALTER TABLE public.dishes ALTER COLUMN dish_id DROP DEFAULT;
       public          jason    false    215    214    215            ?           2604    16475    employees employee_id    DEFAULT     ~   ALTER TABLE ONLY public.employees ALTER COLUMN employee_id SET DEFAULT nextval('public.employees_employee_id_seq'::regclass);
 D   ALTER TABLE public.employees ALTER COLUMN employee_id DROP DEFAULT;
       public          jason    false    220    221    221            ?           2604    16437    orders order_id    DEFAULT     r   ALTER TABLE ONLY public.orders ALTER COLUMN order_id SET DEFAULT nextval('public.orders_order_id_seq'::regclass);
 >   ALTER TABLE public.orders ALTER COLUMN order_id DROP DEFAULT;
       public          jason    false    216    217    217            H          0    16494    customerhistory 
   TABLE DATA           P   COPY public.customerhistory (history_id, date_visited, customer_id) FROM stdin;
    public          jason    false    224   ?1       C          0    16465 	   customers 
   TABLE DATA           _   COPY public.customers (customer_id, customer_name, customer_address, phone_number) FROM stdin;
    public          jason    false    219   2       ?          0    16413    dishes 
   TABLE DATA           @   COPY public.dishes (dish_id, dish_price, dish_name) FROM stdin;
    public          jason    false    215   ?2       E          0    16472 	   employees 
   TABLE DATA           P   COPY public.employees (employee_id, employee_name, employee_status) FROM stdin;
    public          jason    false    221   3       F          0    16478    order_dishes 
   TABLE DATA           Y   COPY public.order_dishes (dish_id, order_id, dish_quantity, dish_totalprice) FROM stdin;
    public          jason    false    222   U3       A          0    16434    orders 
   TABLE DATA           \   COPY public.orders (order_id, total_bill, created_on, employee_id, customer_id) FROM stdin;
    public          jason    false    217   ?3       T           0    0    customerhistory_history_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.customerhistory_history_id_seq', 1, true);
          public          jason    false    223            U           0    0    customers_customer_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.customers_customer_id_seq', 4, true);
          public          jason    false    218            V           0    0    dishes_dish_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.dishes_dish_id_seq', 6, true);
          public          jason    false    214            W           0    0    employees_employee_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.employees_employee_id_seq', 3, true);
          public          jason    false    220            X           0    0    orders_order_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.orders_order_id_seq', 5, true);
          public          jason    false    216            ?           2606    16499 $   customerhistory customerhistory_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.customerhistory
    ADD CONSTRAINT customerhistory_pkey PRIMARY KEY (history_id);
 N   ALTER TABLE ONLY public.customerhistory DROP CONSTRAINT customerhistory_pkey;
       public            jason    false    224            ?           2606    16470    customers customers_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (customer_id);
 B   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_pkey;
       public            jason    false    219            ?           2606    16418    dishes dishes_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.dishes
    ADD CONSTRAINT dishes_pkey PRIMARY KEY (dish_id);
 <   ALTER TABLE ONLY public.dishes DROP CONSTRAINT dishes_pkey;
       public            jason    false    215            ?           2606    16477    employees employees_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_pkey PRIMARY KEY (employee_id);
 B   ALTER TABLE ONLY public.employees DROP CONSTRAINT employees_pkey;
       public            jason    false    221            ?           2606    16482    order_dishes order_dishes_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public.order_dishes
    ADD CONSTRAINT order_dishes_pkey PRIMARY KEY (dish_id, order_id);
 H   ALTER TABLE ONLY public.order_dishes DROP CONSTRAINT order_dishes_pkey;
       public            jason    false    222    222            ?           2606    16439    orders orders_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (order_id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            jason    false    217            ?           2606    16483 &   order_dishes order_dishes_dish_id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.order_dishes
    ADD CONSTRAINT order_dishes_dish_id_fkey FOREIGN KEY (dish_id) REFERENCES public.dishes(dish_id);
 P   ALTER TABLE ONLY public.order_dishes DROP CONSTRAINT order_dishes_dish_id_fkey;
       public          jason    false    3491    222    215            ?           2606    16488 '   order_dishes order_dishes_order_id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.order_dishes
    ADD CONSTRAINT order_dishes_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(order_id);
 Q   ALTER TABLE ONLY public.order_dishes DROP CONSTRAINT order_dishes_order_id_fkey;
       public          jason    false    3493    217    222            H   !   x?3?4202?50?54S00?#N#?=... L*?      C   o   x?3?)z?ky??G??ݛ?2?2?Z[?X????rxQ????5y?????榖\Ɯ!?l@??]??F?&?f?\&???@??R?1y
?@}???F@?\1z\\\ ??&B      ?   m   x?3?44 ???\?????<.cN#S?PH????%
I?@???;?L8-A??9????
陇7q?rB??<ܵ?T?$???L.3????W*D?V^??e???(??+F??? 	?)
      E   C   x?3??K/?|??5O!?Hs??#g	????U
!ww+8q?qs:ޙ????p??<g??=... ?X?      F   Y   x?M??? D?a?FA??????	????????Plk?L?QɃ??,M{p?r?~? +?BM????.6?Z&)s?s!u???R?|3??      A   N   x?u???0??,d?cg???Q???????ޔͮCu????0???3s???????%๙??}???n     