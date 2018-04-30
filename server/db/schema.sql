create table bills
(
  billid     serial not null
    constraint bills_pkey
    primary key,
  paid       boolean default false,
  datepaid   varchar(60),
  amount     integer,
  residentid integer
    constraint bills_resident_fkey
    references residents
);

create table owners
(
  ownerid  serial not null
    constraint owners_pkey
    primary key,
  email    varchar(60),
  password varchar(60)
);

create table property
(
  propertyid serial not null
    constraint property_pkey
    primary key,
  name       varchar(60),
  photourl   varchar(180),
  address    text,
  units      integer,
  value      integer,
  expenses   integer,
  ownerid    integer
    constraint property_ownerid_fkey
    references owners
);

create table residents
(
  residentid serial not null
    constraint residents_pkey
    primary key,
  userkey    varchar(10),
  email      varchar(60),
  password   varchar(60),
  isresident boolean default false,
  propertyid integer
    constraint residents_propertyid_fkey
    references property,
  unitid     integer
    constraint residents_unitid_fkey
    references units,
  ownerid    integer
    constraint residents_ownerid_fkey
    references owners
);

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
    references property
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
    references property,
  residentid   integer
    constraint workorders_residentid_fkey
    references residents,
  unitid       integer
    constraint workorders_unitid_fkey
    references units
);