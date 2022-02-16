import AsyncStorage from '@react-native-community/async-storage'

export const load = async <T = Record<string, unknown>>(
  key: string,
): Promise<T | null> => {
  try {
    const almostThere = await AsyncStorage.getItem(key)
    return almostThere ? JSON.parse(almostThere) : null
  } catch {
    return null
  }
}

export const save = async <T>(key: string, value: T): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

export const remove = async (key: string): Promise<boolean> => {
  try {
    await AsyncStorage.removeItem(key)
    return true
  } catch {
    return false
  }
}

export const clear = async (): Promise<boolean> => {
  try {
    await AsyncStorage.clear()
    return true
  } catch {
    return false
  }
}
