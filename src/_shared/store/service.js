import { BehaviorSubject } from "rxjs";

const products$ = new BehaviorSubject({});

export const onDispatch$ = products$.asObservable();

export const dispatch = (p) => {
  products$.next(p);
};
