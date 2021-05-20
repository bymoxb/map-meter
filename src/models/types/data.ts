import I18n from "i18n-js";
import IUnitDistance from "../interfaces/IUnitDistance";
import IUnitsArea from "../interfaces/IUnitsArea";
import UnitDistance from "./UnitDistance";
import UnitsArea from "./UnitsArea";
// import { IUnitDistance, IUnitsArea, UnitDistance, UnitsArea } from ".."

export const unitsArea: IUnitsArea[] = [
  {
    id: UnitsArea.m2,
    key: I18n.t("units_area.m2.key"),
    symbol: I18n.t("units_area.m2.symbol"),
    name: I18n.t("units_area.m2.name"),
  },
  {
    id: UnitsArea.km2,
    key: I18n.t("units_area.km2.key"),
    symbol: I18n.t("units_area.km2.symbol"),
    name: I18n.t("units_area.km2.name"),
  },
  {
    id: UnitsArea.ha,
    key: I18n.t("units_area.ha.key"),
    symbol: I18n.t("units_area.ha.symbol"),
    name: I18n.t("units_area.ha.name"),
  },
  {
    id: UnitsArea.a,
    key: I18n.t("units_area.a.key"),
    symbol: I18n.t("units_area.a.symbol"),
    name: I18n.t("units_area.a.name"),
  },
  {
    id: UnitsArea.ft2,
    key: I18n.t("units_area.ft2.key"),
    symbol: I18n.t("units_area.ft2.symbol"),
    name: I18n.t("units_area.ft2.name"),
  },
  {
    id: UnitsArea.yd2,
    key: I18n.t("units_area.yd2.key"),
    symbol: I18n.t("units_area.yd2.symbol"),
    name: I18n.t("units_area.yd2.name"),
  },
  {
    id: UnitsArea.in2,
    key: I18n.t("units_area.in2.key"),
    symbol: I18n.t("units_area.in2.symbol"),
    name: I18n.t("units_area.in2.name"),
  },
];

export const unitsDistance: IUnitDistance[] = [
  {
    id: UnitDistance.m,
    key: I18n.t("units_distance.m.key"),
    symbol: I18n.t("units_distance.m.symbol"),
    name: I18n.t("units_distance.m.name"),
  },
  {
    id: UnitDistance.km,
    key: I18n.t("units_distance.km.key"),
    symbol: I18n.t("units_distance.km.symbol"),
    name: I18n.t("units_distance.km.name"),
  },
  {
    id: UnitDistance.cm,
    key: I18n.t("units_distance.cm.key"),
    symbol: I18n.t("units_distance.cm.symbol"),
    name: I18n.t("units_distance.cm.name"),
  },
  {
    id: UnitDistance.mm,
    key: I18n.t("units_distance.mm.key"),
    symbol: I18n.t("units_distance.mm.symbol"),
    name: I18n.t("units_distance.mm.name"),
  },
  {
    id: UnitDistance.mi,
    key: I18n.t("units_distance.mi.key"),
    symbol: I18n.t("units_distance.mi.symbol"),
    name: I18n.t("units_distance.mi.name"),
  },
  {
    id: UnitDistance.sm,
    key: I18n.t("units_distance.sm.key"),
    symbol: I18n.t("units_distance.sm.symbol"),
    name: I18n.t("units_distance.sm.name"),
  },
  {
    id: UnitDistance.ft,
    key: I18n.t("units_distance.ft.key"),
    symbol: I18n.t("units_distance.ft.symbol"),
    name: I18n.t("units_distance.ft.name"),
  },
  {
    id: UnitDistance.in,
    key: I18n.t("units_distance.in.key"),
    symbol: I18n.t("units_distance.in.symbol"),
    name: I18n.t("units_distance.in.name"),
  },
  {
    id: UnitDistance.yd,
    key: I18n.t("units_distance.yd.key"),
    symbol: I18n.t("units_distance.yd.symbol"),
    name: I18n.t("units_distance.yd.name"),
  },
];
