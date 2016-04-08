enum TiresType {
  ALL_SEASON,
  SUMMER_WINTER
}

function shouldChangeTires(type: TiresType): boolean {
  if(type == TiresType.ALL_SEASON) {
    console.log("Wise man is wise");
    return false;
  }
  console.log('You stupid! Now pay and cry');
  return true;
}

shouldChangeTires(TiresType.ALL_SEASON);
shouldChangeTires(TiresType.SUMMER_WINTER);

// explodes - not enum value
// shouldChangeTires('all-season');


type Language = 'js' | 'ts' | 'cljs';

function allTheThingz(lang: Language): void {
  console.log(`${lang} all the thingz!!!111oneoneone`);
}

allTheThingz('js');

// explodes literal not from predefined set
// allTheThingz('scala');
