/**
 * Author Moeid Heidari
 * Date 12 May 2022
 */
import { plainToClass } from 'class-transformer';
import { validateSync,IsInt,IsOptional,Min,Max } from 'class-validator';

/**
 * env vatiables
 */
class EnvironmentVariables {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(10)
  DECIMAL_PLACES: number=1;
}

/**
 * validates the config
 * @param config congig
 * @returns validated config
 */
export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, { enableImplicitConversion: true });
  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
