create table bills
(
  billid     serial not null
    constraint bills_pkey
    primary key,
  paid       boolean default false,
  datepaid   varchar(60),
  amount     integer,
  residentid integer
    constraint bills_residentid_fkey
    references residents
);

create table owners
(
  ownerid     serial      not null
    constraint owners_pkey
    primary key,
  email       varchar(60) not null,
  password    varchar(60) not null,
  firstname   varchar(35) not null,
  lastname    varchar(35) not null,
  companyname varchar(100)
);

create unique index owners_email_uindex
  on owners (email);

create table properties
(
  propertyid serial not null
    constraint properties_pkey
    primary key,
  name       varchar(60),
  photourl   varchar(180),
  address    text,
  units      integer,
  value      integer,
  expenses   integer,
  ownerid    integer
    constraint properties_ownerid_fkey
    references owners
);

create table residents
(
  residentid serial      not null
    constraint residents_pkey
    primary key,
  userkey    varchar(10),
  email      varchar(60) not null,
  password   varchar(60) not null,
  isresident boolean default false,
  propertyid integer
    constraint residents_propertyid_fkey
    references properties,
  unitid     integer
    constraint residents_unitid_fkey
    references units,
  ownerid    integer
    constraint residents_ownerid_fkey
    references owners,
  firstname  varchar(35) not null,
  lastname   varchar(35) not null
);

create unique index residents_email_uindex
  on residents (email);

create table units
(
  unitid     serial not null
    constraint units_pkey
    primary key,
  size       varchar(60),
  occupied   boolean default false,
  bed        integer,
  bath       integer,
  roomnum    integer,
  propertyid integer
    constraint units_propertyid_fkey
    references properties
);

create table workorders
(
  workordersid serial not null
    constraint workorders_pkey
    primary key,
  datestart    varchar(60),
  dateend      varchar(60),
  content      text,
  urgency      varchar(60),
  propertyid   integer
    constraint workorders_propertyid_fkey
    references properties,
  residentid   integer
    constraint workorders_residentid_fkey
    references residents,
  unitid       integer
    constraint workorders_unitid_fkey
    references units
);
