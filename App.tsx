import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import './src/services/localization';
import {useTranslation} from 'react-i18next';

declare const global: {HermesInternal: null | {}};

const {width} = Dimensions.get('window');

const LANGS = [
  {lngCode: 'en', label: 'English'},
  {lngCode: 'ru', label: 'Russian'},
];

const App = () => {
  const {t, i18n} = useTranslation();
  const selectedLngCode = i18n.language;
  const setLng = (lngCode: string) => i18n.changeLanguage(lngCode);

  return (
    <>
      <SafeAreaView>
        <View>
          <Text>Choice Language</Text>
          <Text>{t('common:hello')}</Text>

          {LANGS.map((l) => {
            const selected = l.lngCode === selectedLngCode;
            return (
              <TouchableOpacity
                onPress={() => setLng(l.lngCode)}
                key={l.lngCode}
                disabled={selected}>
                <View style={[styles.row, selected ? styles.selectedRow : {}]}>
                  <Text style={[selected ? styles.selectedText : styles.text]}>
                    {l.label}
                  </Text>
                  {selected && <Text>👍</Text>}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'rgb(231, 232, 235)',
    width: width * 0.8,
  },
  titleContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  select: {
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  selectedRow: {
    backgroundColor: 'rgb(45, 45, 45)',
  },
  selectedText: {
    color: 'rgb(231, 232, 235)',
  },
  text: {
    color: 'rgb(45, 45, 45)',
  },
});

export default App;
