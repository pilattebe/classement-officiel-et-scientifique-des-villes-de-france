import { Collection, Feature, Map as olMap, View } from "ol";
import { Geometry, Point } from "ol/geom";
import { z } from "zod";

export type Colors = {
	fill: string;
	stroke: string;
	text: string;
	dot: string;
	polygon: string;
	edge: string;
};

declare global {
	interface Window {
		godObject: Map<string, GodElement>;
		map: olMap;
	}
}

export type GodElement = {
	metadata: TownMetadata;
	score: TownScore;
	outline: Feature<Geometry>[];
	point: Feature<Point>;
	text: Feature<Point>;
	colors: Colors;
};

export const townScore = z.object({
	id: z.string(),
	createdAt: z.string(),
	updatedAt: z.string(),
	deletedAt: z.null(),
	name: z.string(),
	imageUrl: z.string(),
	wikiUrl: z.string(),
	attackers: z.string().nullable(),
	defenders: z.string().nullable(),
	notes: z.string().nullable(),
	toLive: z.number().min(0).max(20),
	toVisit: z.number().min(0).max(20),
	cultural: z.number().min(0).max(20),
	history: z.number().min(0).max(20),
	vibe: z.number().min(0).max(20),
	total: z.number().min(0).max(80),
	inhabitants: z.number().min(0),
	toLiveViewers: z.number(),
	culturalViewers: z.number(),
	historyViewers: z.number(),
	vibeViewers: z.number(),
	totalViewers: z.number(),
	streamDate: z.string().nullable(),
	streamLink: z.string().nullable(),
});
export type TownScore = z.infer<typeof townScore>;

export const townMetadata = z.object({
	geo_point_2d: z.tuple([z.number(), z.number()]),
	dep_name: z.string(),
	dep_code: z.string(),
	reg_name: z.string(),
	com_code: z.string(),
	com_name: z.string(),
	population: z.number(),
});
export type TownMetadata = z.infer<typeof townMetadata>;
