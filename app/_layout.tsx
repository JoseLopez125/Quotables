import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* This refers to your index screen (likely index.tsx) */}
      <Stack.Screen
        name="index"  // This matches the file name for your home screen
        options={{
          title: 'Quotable',  // This sets the displayed title
          headerTitleStyle: {
            fontSize: 24, // Adjust the font size to make the title larger
            fontWeight: 'bold', // Optionally, make it bold
          },
        }}
      />
    </Stack>
  );
}
