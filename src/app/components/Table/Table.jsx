'use client'
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Avatar,
} from "@nextui-org/react";
import { PlusIcon } from "./PlusIcon";
import { VerticalDotsIcon } from "./VerticalDotsIcon";
import { SearchIcon } from "./SearchIcon";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { statusOptions } from "./data";
import { capitalize, confidencialidadArray, disponibilidadArray, integridadArray } from "./utils";

import ModalMediator from "../ModalMediator.jsx"
const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};


export default function App(props) {
  const INITIAL_VISIBLE_COLUMNS = props.INITIAL_VISIBLE_COLUMNS
  const users = props.users
  var columns = props.columns

  const [modalEdit, setModalEdit] = React.useState(false)
  const [modalCreate, setModalCreate] = React.useState(false)
  const [modalDelete, setModalDelete] = React.useState(false)
  const [modalData, setModalData] = React.useState({})

  const OpenModalEdit = (id, user) => {
    setModalData(user)
    if (modalData != {}) {
      setModalEdit(true)
    }
  }

  const OpenModalCreate = () => {
    setModalCreate(true)
  }

  const OpenModalDelete = (user) => {
    setModalData(user)
    setModalDelete(true)
  }

  const CloseModal = (opcion) => {
    if (opcion) {
      setModalEdit(false)
      setModalCreate(false)
      setModalDelete(false)
    }
  }




  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(users?.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user?._nombre?.toLowerCase().includes(filterValue.toLowerCase()) ||
        user?._criterio?.toLowerCase().includes(filterValue.toLowerCase()) ||
        user?._name?.toLowerCase().includes(filterValue.toLowerCase())
      )

    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status),
      );
    }

    return filteredUsers;
  }, [users, filterValue, statusFilter]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "_nombre":
        return (
          <User
            avatarProps={{ radius: "full", size: "sm", src: "https://images.credly.com/size/400x400/images/3bef627c-a46b-49b4-ab1b-7d0724010c87/blob.png" }}
            classNames={{
              description: "text-default-500",
            }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "_sector":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{user._sector}</p>
          </div>
        );
      case "_ubicacion":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{user._ubicacion}</p>
          </div>
        );
      case "_actividadPrincipal":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{user._actividadPrincipal}</p>
          </div>
        );
      case "_idOrganizacion":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{user._idOrganizacion}</p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize border-none gap-1 text-default-600"
            color={statusColorMap[user.status]}
            size="sm"
            variant="dot"
          >
            {cellValue}
          </Chip>
        );
      case "_apellido":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{user._apellido}</p>
          </div>
        );
      case "_email":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{user._email}</p>
          </div>
        );
      case "_idGrupo":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{user._idGrupo}</p>
          </div>
        );
      case "_grupos":
        return (
          <div className="flex flex-col">
            {user._grupos.map((grupo, index) => (
              console.log(grupo),
              <p key={index} className="text-bold text-small capitalize">{grupo.gr_name}</p>
            ))}
          </div>
        );
      case "_usuarios":
        return (
          <div className="flex flex-col">
            {user._usuarios.map((usuario, index) => (
              console.log(usuario),
              <div>
                <User
                  name={usuario.usr_name + " " + usuario.usr_surname}
                  description={usuario.usr_email}
                  avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                  }}
                />
              </div>
            ))}
          </div>
        );
      case "_definicion":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{user._definicion}</p>
          </div>
        );
      case "_ejemplo":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{user._ejemplo}</p>
          </div>
        );
      case "_criterio":
        return (
          <div className="flex flex-col">
            <Chip color="primary" variant="dot">{user._criterio}</Chip>
          </div>
        );
      case "_code":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{user._code}</p>
          </div>
        );
      case "_name":
        return (
          <div style={{ width: "150px" }} className="flex flex-col">
            <p className="text-bold text-small capitalize">{"֍" + " " + user._name}</p>
          </div>
        );
      case "_description":
        return (
          <div style={{ width: "300px" }} className="flex flex-col">
            <p className="text-bold text-small capitalize">{user._description}</p>
          </div>
        );
      case "_ubication":
        return (
          <div style={{ width: "200px" }} className="flex flex-col">
            <p className="text-bold text-small capitalize">{user._ubication}</p>
          </div>
        );
      case "_label":
        return (
          <div className="flex flex-col">
            <Chip
              variant="flat"
              color="secondary"
            >
              {user._label}
            </Chip>
          </div>
        );
      case "_type":
        return (
          <div className="flex flex-col">

            <Chip color="primary" variant="dot">{user._type}</Chip>
          </div>
        );
      case "_criticality":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{user._criticality}</p>
          </div>
        );
      case "_category":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{user._category}</p>
          </div>
        );
      case "_class":
        return (
          <div className="flex flex-col">{ }
            <Chip color={user._class == "Privado" ? "warning"
              : user._class === "Publica" ? "success"
                : user._class === "Confidencial" ? "danger" : ""}
              variant="bordered">{user._class}</Chip>
          </div>
        );
      case "_review_date":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{user._review_date.split("T")[0]}</p>
          </div>
        );
      case "_ast_usuarios":
        return (
          <div className="flex flex-col">
            {user._ast_usuarios.map((usuario, index) => (
              console.log(usuario),
              <div>
                <User
                  name={usuario.usr_name + " " + usuario.usr_surname}
                  description={usuario.usr_email}
                  avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                  }}
                />
              </div>
            ))}
          </div>
        );
      case "_ast_business_unit":
        return (
          <div style={{ width: "200px" }} className="flex flex-col">
            {user._ast_business_unit.map((businessUnit, index) => (
              console.log(businessUnit),
              <div>
                <User
                  name={businessUnit.bu_name}
                  description="Departamento"
                  avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                  }}
                />
              </div>
            ))}
          </div>
        );

      case "_codigo":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{user._codigo}</p>
          </div>
        );
      case "_confidencialidad":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">
              {
                confidencialidadArray.find(item => item.puntuacion === user._confidencialidad).nombre
              }
            </p>
          </div>
        );
      case "_integridad":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">
              {
                integridadArray.find(item => item.puntuacion === user._integridad).nombre
              }
            </p>
          </div>
        );
      case "_disponibilidad":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">
              {
                disponibilidadArray.find(item => item.puntuacion === user._disponibilidad).nombre
              }
            </p>
          </div>
        );
      case "_valoracion":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{user._confidencialidad + user._integridad + user._disponibilidad}</p>
          </div>
        );


      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown className="bg-background border-1 border-default-200" aria-label="Menú de opciones">
              <DropdownTrigger>
                <Button isIconOnly radius="full" size="sm" variant="dark">
                  <VerticalDotsIcon className="text-default-400" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Menú de opciones2">
                <DropdownItem onClick={() => OpenModalEdit(0, user)}>Edit</DropdownItem>
                <DropdownItem onClick={() => OpenModalDelete(user)}>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>

          </div>
        );
      default:
        return cellValue;
    }
  }, []);



  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);


  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-1",
            }}
            placeholder="Search by name..."
            size="sm"
            startContent={<SearchIcon className="text-default-300" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="bordered"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button
              onClick={() => OpenModalCreate()}
              className="bg-foreground text-background"
              endContent={<PlusIcon />}
              size="sm"
            >
              Add New
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {users.length} users</span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    users.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          classNames={{
            cursor: "bg-foreground text-background",
          }}
          color="white"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="bordered"
          onChange={setPage}
        />
        <span className="text-small text-default-400 ">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${items.length} selected`}
        </span>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    [],
  );

  return (
    <div>
      {modalEdit ? <ModalMediator {...props} peticion={"edita"} type={props.option} data={modalData} cerrar={CloseModal} /> : null}
      {modalCreate ? <ModalMediator {...props} peticion={"crea"} type={props.option} data={modalData} cerrar={CloseModal} /> : null}
      {modalDelete ? <ModalMediator {...props} peticion={"elimina"} type={props.option} data={modalData} cerrar={CloseModal} /> : null}
      <Table
        isCompact
        removeWrapper
        aria-label="Example table with custom cells, pagination and sorting"
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        checkboxesProps={{
          classNames: {
            wrapper: "after:bg-foreground after:text-background text-background",
          },
        }}
        classNames={classNames}
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No users found"} items={sortedItems}>
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
