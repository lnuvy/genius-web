/**
 * object generic의 key 값 타입을 반환합니다
 */
export type UKey<TObject extends object> = keyof TObject;

/**
 * object generic의 key 값 배열 타입을 반환합니다
 */
export type UKeys<TObject extends object> = Array<UKey<TObject>>;
