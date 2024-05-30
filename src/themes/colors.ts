import { MaterialDesign3ColorTheme } from "./m3/MaterialDesign3ColorTheme";

// Create as json with https://material-foundation.github.io/material-theme-builder/
// Added TypeScript types and change some keys to camelCase

export const materialTheme: MaterialDesign3ColorTheme = {
  description:
    "TYPE: CUSTOM\nMaterial Theme Builder export 2024-05-30 12:42:31",
  seed: "#1D0082",
  coreColors: {
    primary: "#1D0082",
  },
  extendedColors: [
    {
      name: "Custom Color 1",
      color: "#A99D6C",
      description: "",
      harmonized: false,
    },
    {
      name: "Custom Color 2",
      color: "#F66F23",
      description: "",
      harmonized: false,
    },
  ],
  schemes: {
    light: {
      primary: "#5C5891",
      surfaceTint: "#5C5891",
      onPrimary: "#FFFFFF",
      primaryContainer: "#E4DFFF",
      onPrimaryContainer: "#18124A",
      secondary: "#5E5C71",
      onSecondary: "#FFFFFF",
      secondaryContainer: "#E4DFF9",
      onSecondaryContainer: "#1B192C",
      tertiary: "#7B5266",
      onTertiary: "#FFFFFF",
      tertiaryContainer: "#FFD8E8",
      onTertiaryContainer: "#2F1122",
      error: "#BA1A1A",
      onError: "#FFFFFF",
      errorContainer: "#FFDAD6",
      onErrorContainer: "#410002",
      background: "#FCF8FF",
      onBackground: "#1C1B20",
      surface: "#FCF8FF",
      onSurface: "#1C1B20",
      surfaceVariant: "#E5E1EC",
      onSurfaceVariant: "#47464F",
      outline: "#787680",
      outlineVariant: "#C8C5D0",
      shadow: "#000000",
      scrim: "#000000",
      inverseSurface: "#313036",
      inverseOnSurface: "#F3EFF7",
      inversePrimary: "#C6C0FF",
      primaryFixed: "#E4DFFF",
      onPrimaryFixed: "#18124A",
      primaryFixedDim: "#C6C0FF",
      onPrimaryFixedVariant: "#444078",
      secondaryFixed: "#E4DFF9",
      onSecondaryFixed: "#1B192C",
      secondaryFixedDim: "#C8C3DC",
      onSecondaryFixedVariant: "#474459",
      tertiaryFixed: "#FFD8E8",
      onTertiaryFixed: "#2F1122",
      tertiaryFixedDim: "#EBB8CF",
      onTertiaryFixedVariant: "#613B4E",
      surfaceDim: "#DCD8E0",
      surfaceBright: "#FCF8FF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#F6F2FA",
      surfaceContainer: "#F1ECF4",
      surfaceContainerHigh: "#EBE7EF",
      surfaceContainerHighest: "#E5E1E9",
    },
    lightMediumContrast: {
      primary: "#403C73",
      surfaceTint: "#5C5891",
      onPrimary: "#FFFFFF",
      primaryContainer: "#736EA9",
      onPrimaryContainer: "#FFFFFF",
      secondary: "#434155",
      onSecondary: "#FFFFFF",
      secondaryContainer: "#757288",
      onSecondaryContainer: "#FFFFFF",
      tertiary: "#5C374A",
      onTertiary: "#FFFFFF",
      tertiaryContainer: "#93687D",
      onTertiaryContainer: "#FFFFFF",
      error: "#8C0009",
      onError: "#FFFFFF",
      errorContainer: "#DA342E",
      onErrorContainer: "#FFFFFF",
      background: "#FCF8FF",
      onBackground: "#1C1B20",
      surface: "#FCF8FF",
      onSurface: "#1C1B20",
      surfaceVariant: "#E5E1EC",
      onSurfaceVariant: "#43424B",
      outline: "#605E67",
      outlineVariant: "#7C7983",
      shadow: "#000000",
      scrim: "#000000",
      inverseSurface: "#313036",
      inverseOnSurface: "#F3EFF7",
      inversePrimary: "#C6C0FF",
      primaryFixed: "#736EA9",
      onPrimaryFixed: "#FFFFFF",
      primaryFixedDim: "#5A558F",
      onPrimaryFixedVariant: "#FFFFFF",
      secondaryFixed: "#757288",
      onSecondaryFixed: "#FFFFFF",
      secondaryFixedDim: "#5C5A6F",
      onSecondaryFixedVariant: "#FFFFFF",
      tertiaryFixed: "#93687D",
      onTertiaryFixed: "#FFFFFF",
      tertiaryFixedDim: "#785064",
      onTertiaryFixedVariant: "#FFFFFF",
      surfaceDim: "#DCD8E0",
      surfaceBright: "#FCF8FF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#F6F2FA",
      surfaceContainer: "#F1ECF4",
      surfaceContainerHigh: "#EBE7EF",
      surfaceContainerHighest: "#E5E1E9",
    },
    lightHighContrast: {
      primary: "#1F1A50",
      surfaceTint: "#5C5891",
      onPrimary: "#FFFFFF",
      primaryContainer: "#403C73",
      onPrimaryContainer: "#FFFFFF",
      secondary: "#222033",
      onSecondary: "#FFFFFF",
      secondaryContainer: "#434155",
      onSecondaryContainer: "#FFFFFF",
      tertiary: "#371729",
      onTertiary: "#FFFFFF",
      tertiaryContainer: "#5C374A",
      onTertiaryContainer: "#FFFFFF",
      error: "#4E0002",
      onError: "#FFFFFF",
      errorContainer: "#8C0009",
      onErrorContainer: "#FFFFFF",
      background: "#FCF8FF",
      onBackground: "#1C1B20",
      surface: "#FCF8FF",
      onSurface: "#000000",
      surfaceVariant: "#E5E1EC",
      onSurfaceVariant: "#24232B",
      outline: "#43424B",
      outlineVariant: "#43424B",
      shadow: "#000000",
      scrim: "#000000",
      inverseSurface: "#313036",
      inverseOnSurface: "#FFFFFF",
      inversePrimary: "#EEE9FF",
      primaryFixed: "#403C73",
      onPrimaryFixed: "#FFFFFF",
      primaryFixedDim: "#2A255C",
      onPrimaryFixedVariant: "#FFFFFF",
      secondaryFixed: "#434155",
      onSecondaryFixed: "#FFFFFF",
      secondaryFixedDim: "#2C2B3E",
      onSecondaryFixedVariant: "#FFFFFF",
      tertiaryFixed: "#5C374A",
      onTertiaryFixed: "#FFFFFF",
      tertiaryFixedDim: "#432234",
      onTertiaryFixedVariant: "#FFFFFF",
      surfaceDim: "#DCD8E0",
      surfaceBright: "#FCF8FF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#F6F2FA",
      surfaceContainer: "#F1ECF4",
      surfaceContainerHigh: "#EBE7EF",
      surfaceContainerHighest: "#E5E1E9",
    },
    dark: {
      primary: "#C6C0FF",
      surfaceTint: "#C6C0FF",
      onPrimary: "#2E2960",
      primaryContainer: "#444078",
      onPrimaryContainer: "#E4DFFF",
      secondary: "#C8C3DC",
      onSecondary: "#302E41",
      secondaryContainer: "#474459",
      onSecondaryContainer: "#E4DFF9",
      tertiary: "#EBB8CF",
      onTertiary: "#482537",
      tertiaryContainer: "#613B4E",
      onTertiaryContainer: "#FFD8E8",
      error: "#FFB4AB",
      onError: "#690005",
      errorContainer: "#93000A",
      onErrorContainer: "#FFDAD6",
      background: "#131318",
      onBackground: "#E5E1E9",
      surface: "#131318",
      onSurface: "#E5E1E9",
      surfaceVariant: "#47464F",
      onSurfaceVariant: "#C8C5D0",
      outline: "#928F99",
      outlineVariant: "#47464F",
      shadow: "#000000",
      scrim: "#000000",
      inverseSurface: "#E5E1E9",
      inverseOnSurface: "#313036",
      inversePrimary: "#5C5891",
      primaryFixed: "#E4DFFF",
      onPrimaryFixed: "#18124A",
      primaryFixedDim: "#C6C0FF",
      onPrimaryFixedVariant: "#444078",
      secondaryFixed: "#E4DFF9",
      onSecondaryFixed: "#1B192C",
      secondaryFixedDim: "#C8C3DC",
      onSecondaryFixedVariant: "#474459",
      tertiaryFixed: "#FFD8E8",
      onTertiaryFixed: "#2F1122",
      tertiaryFixedDim: "#EBB8CF",
      onTertiaryFixedVariant: "#613B4E",
      surfaceDim: "#131318",
      surfaceBright: "#3A383F",
      surfaceContainerLowest: "#0E0E13",
      surfaceContainerLow: "#1C1B20",
      surfaceContainer: "#201F25",
      surfaceContainerHigh: "#2A292F",
      surfaceContainerHighest: "#35343A",
    },
    darkMediumContrast: {
      primary: "#CAC4FF",
      surfaceTint: "#C6C0FF",
      onPrimary: "#130C44",
      primaryContainer: "#8F8AC7",
      onPrimaryContainer: "#000000",
      secondary: "#CCC8E1",
      onSecondary: "#161426",
      secondaryContainer: "#918EA5",
      onSecondaryContainer: "#000000",
      tertiary: "#F0BDD4",
      onTertiary: "#290B1D",
      tertiaryContainer: "#B18499",
      onTertiaryContainer: "#000000",
      error: "#FFBAB1",
      onError: "#370001",
      errorContainer: "#FF5449",
      onErrorContainer: "#000000",
      background: "#131318",
      onBackground: "#E5E1E9",
      surface: "#131318",
      onSurface: "#FEF9FF",
      surfaceVariant: "#47464F",
      onSurfaceVariant: "#CDC9D4",
      outline: "#A4A1AC",
      outlineVariant: "#84828C",
      shadow: "#000000",
      scrim: "#000000",
      inverseSurface: "#E5E1E9",
      inverseOnSurface: "#2A292F",
      inversePrimary: "#464179",
      primaryFixed: "#E4DFFF",
      onPrimaryFixed: "#0D0540",
      primaryFixedDim: "#C6C0FF",
      onPrimaryFixedVariant: "#342F66",
      secondaryFixed: "#E4DFF9",
      onSecondaryFixed: "#100F21",
      secondaryFixedDim: "#C8C3DC",
      onSecondaryFixedVariant: "#363448",
      tertiaryFixed: "#FFD8E8",
      onTertiaryFixed: "#230717",
      tertiaryFixedDim: "#EBB8CF",
      onTertiaryFixedVariant: "#4E2B3D",
      surfaceDim: "#131318",
      surfaceBright: "#3A383F",
      surfaceContainerLowest: "#0E0E13",
      surfaceContainerLow: "#1C1B20",
      surfaceContainer: "#201F25",
      surfaceContainerHigh: "#2A292F",
      surfaceContainerHighest: "#35343A",
    },
    darkHighContrast: {
      primary: "#FEF9FF",
      surfaceTint: "#C6C0FF",
      onPrimary: "#000000",
      primaryContainer: "#CAC4FF",
      onPrimaryContainer: "#000000",
      secondary: "#FEF9FF",
      onSecondary: "#000000",
      secondaryContainer: "#CCC8E1",
      onSecondaryContainer: "#000000",
      tertiary: "#FFF9F9",
      onTertiary: "#000000",
      tertiaryContainer: "#F0BDD4",
      onTertiaryContainer: "#000000",
      error: "#FFF9F9",
      onError: "#000000",
      errorContainer: "#FFBAB1",
      onErrorContainer: "#000000",
      background: "#131318",
      onBackground: "#E5E1E9",
      surface: "#131318",
      onSurface: "#FFFFFF",
      surfaceVariant: "#47464F",
      onSurfaceVariant: "#FEF9FF",
      outline: "#CDC9D4",
      outlineVariant: "#CDC9D4",
      shadow: "#000000",
      scrim: "#000000",
      inverseSurface: "#E5E1E9",
      inverseOnSurface: "#000000",
      inversePrimary: "#272259",
      primaryFixed: "#E8E4FF",
      onPrimaryFixed: "#000000",
      primaryFixedDim: "#CAC4FF",
      onPrimaryFixedVariant: "#130C44",
      secondaryFixed: "#E8E4FD",
      onSecondaryFixed: "#000000",
      secondaryFixedDim: "#CCC8E1",
      onSecondaryFixedVariant: "#161426",
      tertiaryFixed: "#FFDEEB",
      onTertiaryFixed: "#000000",
      tertiaryFixedDim: "#F0BDD4",
      onTertiaryFixedVariant: "#290B1D",
      surfaceDim: "#131318",
      surfaceBright: "#3A383F",
      surfaceContainerLowest: "#0E0E13",
      surfaceContainerLow: "#1C1B20",
      surfaceContainer: "#201F25",
      surfaceContainerHigh: "#2A292F",
      surfaceContainerHighest: "#35343A",
    },
  },
  palettes: {
    primary: {
      0: "#000000",
      5: "#0C0049",
      10: "#150066",
      15: "#1D0182",
      20: "#29178C",
      25: "#352797",
      30: "#4135A2",
      35: "#4D42AF",
      40: "#594FBC",
      50: "#7268D7",
      60: "#8C83F3",
      70: "#A8A0FF",
      80: "#C6C0FF",
      90: "#E4DFFF",
      95: "#F3EEFF",
      98: "#FCF8FF",
      99: "#FFFBFF",
      100: "#FFFFFF",
    },
    secondary: {
      0: "#000000",
      5: "#100E24",
      10: "#1B1930",
      15: "#25233A",
      20: "#302E46",
      25: "#3B3951",
      30: "#46445D",
      35: "#525069",
      40: "#5E5B76",
      50: "#777490",
      60: "#918DAA",
      70: "#ACA8C6",
      80: "#C7C3E2",
      90: "#E4DFFF",
      95: "#F3EEFF",
      98: "#FCF8FF",
      99: "#FFFBFF",
      100: "#FFFFFF",
    },
    tertiary: {
      0: "#000000",
      5: "#260418",
      10: "#330E24",
      15: "#3F182E",
      20: "#4C2239",
      25: "#582D44",
      30: "#653850",
      35: "#73445C",
      40: "#804F68",
      50: "#9B6881",
      60: "#B8819B",
      70: "#D49BB6",
      80: "#F2B5D2",
      90: "#FFD8E8",
      95: "#FFECF2",
      98: "#FFF8F8",
      99: "#FFFBFF",
      100: "#FFFFFF",
    },
    neutral: {
      0: "#000000",
      5: "#111014",
      10: "#1C1B1F",
      15: "#262529",
      20: "#313034",
      25: "#3C3B3F",
      30: "#48464A",
      35: "#535256",
      40: "#5F5E62",
      50: "#78767A",
      60: "#929094",
      70: "#ADAAAF",
      80: "#C9C5CA",
      90: "#E5E1E6",
      95: "#F4EFF4",
      98: "#FCF8FD",
      99: "#FFFBFF",
      100: "#FFFFFF",
    },
    neutralVariant: {
      0: "#000000",
      5: "#111018",
      10: "#1C1B23",
      15: "#26252D",
      20: "#312F38",
      25: "#3C3A43",
      30: "#47464F",
      35: "#53515A",
      40: "#5F5D67",
      50: "#787680",
      60: "#928F99",
      70: "#ADAAB4",
      80: "#C8C5D0",
      90: "#E5E1EC",
      95: "#F3EFFA",
      98: "#FCF8FF",
      99: "#FFFBFF",
      100: "#FFFFFF",
    },
  },
};