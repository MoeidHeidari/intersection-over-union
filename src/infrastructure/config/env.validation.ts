/**
 * Author Moeid Heidari
 * Date 12 May 2022
 */
import { plainToClass } from 'class-transformer';
import { validateSync, IsOptional } from 'class-validator';

/**
 * env vatiables
 */
class EnvironmentVariables {
  @IsOptional()
  DECIMAL_PLACES = 3;
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
