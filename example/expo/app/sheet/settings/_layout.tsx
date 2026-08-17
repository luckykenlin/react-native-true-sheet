import { Stack } from 'expo-router';

/**
 * REPRO: the only change to this screen is that its content is now wrapped in a
 * nested native-stack. The screen itself (index.tsx) is byte-for-byte the old
 * settings.tsx.
 *
 * The example never exercised this: the one nested <Stack> it has lives under
 * `(home)`, which is the FIRST <Sheet.Screen> — TrueSheetView renders that as
 * the base screen, outside of any TrueSheet.
 *
 * `headerShown: false` keeps the sheet looking exactly like it did before, so
 * the only observable difference is that the buttons no longer respond.
 */
export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' },
      }}
    />
  );
}
