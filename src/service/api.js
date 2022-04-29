import {Ajax} from './http'
export function fetchCharacterList() {
  return Ajax.get('/data.json')
}
