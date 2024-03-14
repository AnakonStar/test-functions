import Context from '@/components/Context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from 'routes';

export default function App() {
  return (
    <Context>
      <Routes />
    </Context>
  );
}
