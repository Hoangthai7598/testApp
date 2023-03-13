import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface IHeaderProps {
  title: string;
}

function AppHeader(props: IHeaderProps) {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default AppHeader;
