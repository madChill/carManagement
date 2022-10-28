--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Drop databases (except postgres and template1)
--

DROP DATABASE myapp;




--
-- Drop roles
--

DROP ROLE dbuser;


--
-- Roles
--

CREATE ROLE dbuser;
ALTER ROLE dbuser WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:V+gHUN7HY5XXqly4CVH3Bw==$Tm1NENoHMXHiBO8qjDVx894en2xeq+fJkDVl5BXINUQ=:T9tlhCb6819JWfck88345govBCYdx0k15cd1INR4OhY=';






--
-- Databases
--

--
-- Database "template1" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Debian 14.5-1.pgdg110+1)
-- Dumped by pg_dump version 14.5 (Debian 14.5-1.pgdg110+1)

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

UPDATE pg_catalog.pg_database SET datistemplate = false WHERE datname = 'template1';
DROP DATABASE template1;
--
-- Name: template1; Type: DATABASE; Schema: -; Owner: dbuser
--

CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE template1 OWNER TO dbuser;

\connect template1

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

--
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: dbuser
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- Name: template1; Type: DATABASE PROPERTIES; Schema: -; Owner: dbuser
--

ALTER DATABASE template1 IS_TEMPLATE = true;


\connect template1

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

--
-- Name: DATABASE template1; Type: ACL; Schema: -; Owner: dbuser
--

REVOKE CONNECT,TEMPORARY ON DATABASE template1 FROM PUBLIC;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;


--
-- PostgreSQL database dump complete
--

--
-- Database "myapp" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Debian 14.5-1.pgdg110+1)
-- Dumped by pg_dump version 14.5 (Debian 14.5-1.pgdg110+1)

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

--
-- Name: myapp; Type: DATABASE; Schema: -; Owner: dbuser
--

CREATE DATABASE myapp WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE myapp OWNER TO dbuser;

\connect myapp

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
-- Name: scans_result; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public.scans_result (
    id integer NOT NULL,
    "Status" character varying,
    "RepositoryName" character varying,
    "QueuedAt" timestamp without time zone,
    "ScanningAt" timestamp without time zone,
    "FinishedAt" timestamp without time zone,
    "Findings" jsonb DEFAULT '{}'::jsonb
);


ALTER TABLE public.scans_result OWNER TO dbuser;

--
-- Name: scans_result_id_seq; Type: SEQUENCE; Schema: public; Owner: dbuser
--

CREATE SEQUENCE public.scans_result_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.scans_result_id_seq OWNER TO dbuser;

--
-- Name: scans_result_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dbuser
--

ALTER SEQUENCE public.scans_result_id_seq OWNED BY public.scans_result.id;


--
-- Name: scans_result id; Type: DEFAULT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public.scans_result ALTER COLUMN id SET DEFAULT nextval('public.scans_result_id_seq'::regclass);


--
-- Data for Name: scans_result; Type: TABLE DATA; Schema: public; Owner: dbuser
--

COPY public.scans_result (id, "Status", "RepositoryName", "QueuedAt", "ScanningAt", "FinishedAt", "Findings") FROM stdin;
1	Success	api1	2022-10-22 22:07:02	2022-10-22 22:07:02	2022-10-22 22:07:02	{"findings": [{"type": "sast", "ruleId": "G402", "location": {"path": "connectors/apigateway.go", "positions": {"begin": {"line": 60}}}, "metadata": {"severity": "HIGH", "description": "TLS InsecureSkipVerify set true."}}, {"type": "sast", "ruleId": "G404", "location": {"path": "util/util.go", "positions": {"begin": {"line": 32}}}, "metadata": {"severity": "HIGH", "description": "Use of weak random number generator (math/rand instead of crypto/rand)"}}]}
2	Success	api2	2022-10-22 22:07:02	2022-10-22 22:07:02	2022-10-22 22:07:02	{"findings": [{"type": "sast", "ruleId": "G402", "location": {"path": "connectors/apigateway.go", "positions": {"begin": {"line": 60}}}, "metadata": {"severity": "HIGH", "description": "TLS InsecureSkipVerify set true."}}, {"type": "sast", "ruleId": "G404", "location": {"path": "util/util.go", "positions": {"begin": {"line": 32}}}, "metadata": {"severity": "HIGH", "description": "Use of weak random number generator (math/rand instead of crypto/rand)"}}]}
3	In Progress	api4	2022-10-22 22:07:02	2022-10-22 22:07:02	2022-10-22 22:07:02	{"findings": [{"type": "sast", "ruleId": "G402", "location": {"path": "connectors/apigateway.go", "positions": {"begin": {"line": 60}}}, "metadata": {"severity": "HIGH", "description": "TLS InsecureSkipVerify set true."}}, {"type": "sast", "ruleId": "G404", "location": {"path": "util/util.go", "positions": {"begin": {"line": 32}}}, "metadata": {"severity": "HIGH", "description": "Use of weak random number generator (math/rand instead of crypto/rand)"}}]}
4	In Progress	api5	2022-10-22 22:07:02	2022-10-22 22:07:02	2022-10-22 22:07:02	{"findings": [{"type": "sast", "ruleId": "G402", "location": {"path": "connectors/apigateway.go", "positions": {"begin": {"line": 60}}}, "metadata": {"severity": "HIGH", "description": "TLS InsecureSkipVerify set true."}}, {"type": "sast", "ruleId": "G404", "location": {"path": "util/util.go", "positions": {"begin": {"line": 32}}}, "metadata": {"severity": "HIGH", "description": "Use of weak random number generator (math/rand instead of crypto/rand)"}}]}
5	Queued	api6	2022-10-22 22:07:02	2022-10-22 22:07:02	2022-10-22 22:07:02	{"findings": [{"type": "sast", "ruleId": "G402", "location": {"path": "connectors/apigateway.go", "positions": {"begin": {"line": 60}}}, "metadata": {"severity": "HIGH", "description": "TLS InsecureSkipVerify set true."}}, {"type": "sast", "ruleId": "G404", "location": {"path": "util/util.go", "positions": {"begin": {"line": 32}}}, "metadata": {"severity": "HIGH", "description": "Use of weak random number generator (math/rand instead of crypto/rand)"}}]}
6	Queued	api7	2022-10-22 22:07:02	2022-10-22 22:07:02	2022-10-22 22:07:02	{"findings": [{"type": "sast", "ruleId": "G402", "location": {"path": "connectors/apigateway.go", "positions": {"begin": {"line": 60}}}, "metadata": {"severity": "HIGH", "description": "TLS InsecureSkipVerify set true."}}, {"type": "sast", "ruleId": "G404", "location": {"path": "util/util.go", "positions": {"begin": {"line": 32}}}, "metadata": {"severity": "HIGH", "description": "Use of weak random number generator (math/rand instead of crypto/rand)"}}]}
7	Queued	api8	2022-10-22 22:07:02	2022-10-22 22:07:02	2022-10-22 22:07:02	{"findings": [{"type": "sast", "ruleId": "G402", "location": {"path": "connectors/apigateway.go", "positions": {"begin": {"line": 60}}}, "metadata": {"severity": "HIGH", "description": "TLS InsecureSkipVerify set true."}}, {"type": "sast", "ruleId": "G404", "location": {"path": "util/util.go", "positions": {"begin": {"line": 32}}}, "metadata": {"severity": "HIGH", "description": "Use of weak random number generator (math/rand instead of crypto/rand)"}}]}
8	Failure	api9	2022-10-22 22:07:02	2022-10-22 22:07:02	2022-10-22 22:07:02	{"findings": [{"type": "sast", "ruleId": "G402", "location": {"path": "connectors/apigateway.go", "positions": {"begin": {"line": 60}}}, "metadata": {"severity": "HIGH", "description": "TLS InsecureSkipVerify set true."}}, {"type": "sast", "ruleId": "G404", "location": {"path": "util/util.go", "positions": {"begin": {"line": 32}}}, "metadata": {"severity": "HIGH", "description": "Use of weak random number generator (math/rand instead of crypto/rand)"}}]}
9	Failure	api10	2022-10-22 22:07:02	2022-10-22 22:07:02	2022-10-22 22:07:02	{"findings": [{"type": "sast", "ruleId": "G402", "location": {"path": "connectors/apigateway.go", "positions": {"begin": {"line": 60}}}, "metadata": {"severity": "HIGH", "description": "TLS InsecureSkipVerify set true."}}, {"type": "sast", "ruleId": "G404", "location": {"path": "util/util.go", "positions": {"begin": {"line": 32}}}, "metadata": {"severity": "HIGH", "description": "Use of weak random number generator (math/rand instead of crypto/rand)"}}]}
10	Failure	api111	2022-10-22 22:07:02	2022-10-22 22:07:02	2022-10-22 22:07:02	{"findings": [{"type": "sast", "ruleId": "G402", "location": {"path": "connectors/apigateway.go", "positions": {"begin": {"line": 60}}}, "metadata": {"severity": "HIGH", "description": "TLS InsecureSkipVerify set true."}}, {"type": "sast", "ruleId": "G404", "location": {"path": "util/util.go", "positions": {"begin": {"line": 32}}}, "metadata": {"severity": "HIGH", "description": "Use of weak random number generator (math/rand instead of crypto/rand)"}}]}
11	Failure	api111	2022-10-22 22:07:02	2022-10-22 22:07:02	2022-10-22 22:07:02	{"findings": [{"type": "sast", "ruleId": "G402", "location": {"path": "connectors/apigateway.go", "positions": {"begin": {"line": 60}}}, "metadata": {"severity": "HIGH", "description": "TLS InsecureSkipVerify set true."}}, {"type": "sast", "ruleId": "G404", "location": {"path": "util/util.go", "positions": {"begin": {"line": 32}}}, "metadata": {"severity": "HIGH", "description": "Use of weak random number generator (math/rand instead of crypto/rand)"}}]}
12	Failure	api112	2022-10-22 22:07:02	2022-10-22 22:07:02	2022-10-22 22:07:02	{"findings": [{"type": "sast", "ruleId": "G402", "location": {"path": "connectors/apigateway.go", "positions": {"begin": {"line": 60}}}, "metadata": {"severity": "HIGH", "description": "TLS InsecureSkipVerify set true."}}, {"type": "sast", "ruleId": "G404", "location": {"path": "util/util.go", "positions": {"begin": {"line": 32}}}, "metadata": {"severity": "HIGH", "description": "Use of weak random number generator (math/rand instead of crypto/rand)"}}]}
\.


--
-- Name: scans_result_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dbuser
--

SELECT pg_catalog.setval('public.scans_result_id_seq', 12, true);


--
-- Name: scans_result PK_3c8de58d12f806958b3563f5873; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public.scans_result
    ADD CONSTRAINT "PK_3c8de58d12f806958b3563f5873" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Debian 14.5-1.pgdg110+1)
-- Dumped by pg_dump version 14.5 (Debian 14.5-1.pgdg110+1)

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

DROP DATABASE postgres;
--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: dbuser
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO dbuser;

\connect postgres

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

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: dbuser
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

