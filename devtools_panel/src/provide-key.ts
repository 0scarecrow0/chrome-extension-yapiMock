import { InjectionKey, Ref } from 'vue';
import { IMockRules, INetworkType } from '../../types/NetworkTypes';

export const proxyObjKey = Symbol('proxyObjKey') as InjectionKey<Ref<IMockRules>>;
export const proxyObjChange = Symbol('proxyObjChange') as InjectionKey<(item:INetworkType)=>void>;
