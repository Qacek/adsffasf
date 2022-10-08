/**
 * @name PLUGIN_NAME
 * @version 1.0.0
 * @description nothing
 * 
 * @website http://twitter.com/BandagedBD
 */

import { BdApi } from "@bandagedbd/bdapi";

export class PLUGIN_NAME {

    public getName(): string {
        return "PLUGIN_NAME";
    }

    public getDescription(): string {
        return "Describe the basic functions. Maybe a support server link";
    }

    public getVersion(): string {
        return "1.0.0";
    }

    public getAuthor(): string {
        return "CorrM";
    }

    public start(): void {
        BdApi.alert("CORRM", "Just check");
    }

    public stop(): void {

    }
}